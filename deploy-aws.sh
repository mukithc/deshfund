#!/bin/bash
# DeshFund - AWS App Runner Deployment (Bash)
# Prerequisites: AWS CLI configured, Docker running
# Usage: ./deploy-aws.sh [API_URL]

set -e

API_URL="${1:-http://localhost:8080/api}"
REGION="${AWS_REGION:-us-east-1}"

echo ""
echo "=== DeshFund AWS Deployment ==="
echo "API URL: $API_URL"
echo "Region: $REGION"
echo ""

# Check prerequisites
command -v aws >/dev/null 2>&1 || { echo "ERROR: AWS CLI not found. Install from https://aws.amazon.com/cli/"; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "ERROR: Docker not found. Install Docker Desktop."; exit 1; }

# 1. Get AWS Account ID
echo "[1/6] Getting AWS account..."
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
[ -z "$AWS_ACCOUNT_ID" ] && { echo "ERROR: AWS CLI not configured. Run: aws configure"; exit 1; }
echo "  Account: $AWS_ACCOUNT_ID"

ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/deshfund"

# 2. Create ECR repository
echo ""
echo "[2/6] Creating ECR repository..."
aws ecr create-repository --repository-name deshfund --region "$REGION" 2>/dev/null || echo "  (Repository may already exist)"

# 3. Login to ECR
echo ""
echo "[3/6] Logging into ECR..."
aws ecr get-login-password --region "$REGION" | docker login --username AWS --password-stdin "${AWS_ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com"

# 4. Build Docker image
echo ""
echo "[4/6] Building Docker image..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
docker build --build-arg "VITE_API_URL=$API_URL" -t deshfund .

# 5. Tag and push
echo ""
echo "[5/6] Pushing to ECR..."
docker tag deshfund:latest "${ECR_URI}:latest"
docker push "${ECR_URI}:latest"

echo ""
echo "[6/6] Done!"
echo ""
echo "=== Next: Create App Runner Service ==="
echo "1. Open: https://console.aws.amazon.com/apprunner/"
echo "2. Create service > Container registry > Amazon ECR"
echo "3. Image: ${ECR_URI}:latest"
echo "4. Port: 3000"
echo ""
