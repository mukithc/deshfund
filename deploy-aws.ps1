# DeshFund - AWS App Runner Deployment Script
# Prerequisites: AWS CLI configured, Docker Desktop running
# Install: https://aws.amazon.com/cli/ | https://www.docker.com/products/docker-desktop/

param(
    [string]$ApiUrl = "http://localhost:8080/api",
    [string]$Region = "us-east-1"
)

$ErrorActionPreference = "Stop"

# Check prerequisites
if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: AWS CLI not found. Install from https://aws.amazon.com/cli/" -ForegroundColor Red
    exit 1
}
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Docker not found. Install Docker Desktop from https://www.docker.com/products/docker-desktop/" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== DeshFund AWS Deployment ===" -ForegroundColor Cyan
Write-Host "API URL: $ApiUrl" -ForegroundColor Gray
Write-Host "Region: $Region`n" -ForegroundColor Gray

# 1. Get AWS Account ID
Write-Host "[1/6] Getting AWS account..." -ForegroundColor Yellow
$AWS_ACCOUNT_ID = aws sts get-caller-identity --query Account --output text
if (-not $AWS_ACCOUNT_ID) { throw "AWS CLI not configured. Run: aws configure" }
Write-Host "  Account: $AWS_ACCOUNT_ID" -ForegroundColor Green

$ECR_URI = "$AWS_ACCOUNT_ID.dkr.ecr.$Region.amazonaws.com/deshfund"

# 2. Create ECR repository (ignore if exists)
Write-Host "`n[2/6] Creating ECR repository..." -ForegroundColor Yellow
aws ecr create-repository --repository-name deshfund --region $Region 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "  (Repository may already exist)" -ForegroundColor Gray }
else { Write-Host "  Created." -ForegroundColor Green }

# 3. Login to ECR
Write-Host "`n[3/6] Logging into ECR..." -ForegroundColor Yellow
aws ecr get-login-password --region $Region | docker login --username AWS --password-stdin "$AWS_ACCOUNT_ID.dkr.ecr.$Region.amazonaws.com"
Write-Host "  Done." -ForegroundColor Green

# 4. Build Docker image
Write-Host "`n[4/6] Building Docker image..." -ForegroundColor Yellow
Set-Location $PSScriptRoot
docker build --build-arg "VITE_API_URL=$ApiUrl" -t deshfund .
Write-Host "  Done." -ForegroundColor Green

# 5. Tag and push
Write-Host "`n[5/6] Pushing to ECR..." -ForegroundColor Yellow
docker tag deshfund:latest "${ECR_URI}:latest"
docker push "${ECR_URI}:latest"
Write-Host "  Done." -ForegroundColor Green

# 6. Next steps
Write-Host "`n[6/6] Image pushed successfully!" -ForegroundColor Green
Write-Host "`n=== Next: Create App Runner Service ===" -ForegroundColor Cyan
Write-Host "1. Open: https://console.aws.amazon.com/apprunner/" -ForegroundColor White
Write-Host "2. Click 'Create service'" -ForegroundColor White
Write-Host "3. Source: Container registry > Amazon ECR" -ForegroundColor White
Write-Host "4. Image URI: ${ECR_URI}:latest" -ForegroundColor Yellow
Write-Host "5. Port: 3000" -ForegroundColor White
Write-Host "6. Create & deploy" -ForegroundColor White
Write-Host "`nImage: ${ECR_URI}:latest" -ForegroundColor Gray
Write-Host ""
