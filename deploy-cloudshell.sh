#!/bin/bash
# DeshFund - AWS CloudShell Deployment Script
# Clones from GitHub, builds, deploys to S3 + CloudFront
# Run in AWS CloudShell: curl -sSL https://raw.githubusercontent.com/mukithc/deshfund/main/deploy-cloudshell.sh | bash

set -e

GITHUB_REPO="https://github.com/mukithc/deshfund.git"
REPO_DIR="deshfund"
BUCKET_PREFIX="deshfund"
REGION="${AWS_REGION:-us-east-1}"
API_URL="${VITE_API_URL:-http://localhost:8080/api}"

echo ""
echo "=== DeshFund AWS CloudShell Deployment ==="
echo "Repo: $GITHUB_REPO"
echo "Region: $REGION"
echo "API URL: $API_URL"
echo ""

# 1. Clone from GitHub
echo "[1/7] Cloning repository..."
if [ -d "$REPO_DIR" ]; then rm -rf "$REPO_DIR"; fi
git clone --depth 1 "$GITHUB_REPO" "$REPO_DIR"
cd "$REPO_DIR"

# 2. Setup Node/pnpm
echo ""
echo "[2/7] Setting up Node.js and pnpm..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 2>/dev/null || true

if ! command -v node &>/dev/null; then
  echo "  Installing Node.js..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install 20
  nvm use 20
fi

corepack enable 2>/dev/null || npm install -g corepack
corepack prepare pnpm@10.4.1 --activate 2>/dev/null || npm install -g pnpm

# 3. Install dependencies
echo ""
echo "[3/7] Installing dependencies..."
pnpm install --frozen-lockfile

# 4. Build
echo ""
echo "[4/7] Building frontend..."
export VITE_API_URL="$API_URL"
pnpm build

if [ ! -d "dist/public" ]; then
  echo "ERROR: Build failed - dist/public not found"
  exit 1
fi

# 5. Create S3 bucket
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
BUCKET_NAME="${BUCKET_PREFIX}-${ACCOUNT_ID}-${REGION}"
echo ""
echo "[5/7] Creating S3 bucket: $BUCKET_NAME..."
aws s3 mb "s3://${BUCKET_NAME}" --region "$REGION" 2>/dev/null || echo "  (Bucket may already exist)"

# 6. Upload to S3
echo ""
echo "[6/7] Uploading to S3..."
aws s3 sync dist/public "s3://${BUCKET_NAME}" --delete --region "$REGION"

# Configure S3 for static website hosting (SPA - 404/403 -> index.html)
aws s3api put-bucket-website --bucket "$BUCKET_NAME" --website-configuration '{"IndexDocument":{"Suffix":"index.html"},"ErrorDocument":{"Key":"index.html"}}' --region "$REGION" 2>/dev/null || true

# 7. Configure bucket policy for public read (static website)
echo ""
echo "[7/7] Configuring bucket policy..."
aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [{
    \"Sid\": \"PublicReadGetObject\",
    \"Effect\": \"Allow\",
    \"Principal\": \"*\",
    \"Action\": \"s3:GetObject\",
    \"Resource\": \"arn:aws:s3:::${BUCKET_NAME}/*\"
  }]
}" --region "$REGION" 2>/dev/null || echo "  (Policy may already be set)"

echo ""
echo "=== Deployment Complete ==="
echo ""
echo "S3 Bucket: s3://${BUCKET_NAME}"
echo ""
echo "Your app is live at:"
echo "  http://${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com"
echo ""
echo "For HTTPS: Create a CloudFront distribution with origin:"
echo "  ${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com"
echo ""
echo "To redeploy: cd $REPO_DIR && pnpm build && aws s3 sync dist/public s3://${BUCKET_NAME} --delete"
echo ""
