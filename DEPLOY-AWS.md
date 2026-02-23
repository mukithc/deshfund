# Deploy DeshFund to AWS

This guide covers multiple AWS deployment options for the DeshFund app.

---

## CloudFormation Git Integration

**Deployment file path:** `buildspec.yml`  
**Template file path:** `template.yaml`

**Deployment file parameters** (add in AWS Console):
| Parameter | Value |
|-----------|-------|
| ApiUrl | `https://api.yourdomain.com/api` |
| BucketName | *(from stack output after first deploy)* |

**First deploy:** Create the stack manually to get the BucketName output, then add it to the build environment.

---

## Option 0: AWS CloudShell (One-Command Deploy)

**No local install needed.** Open [AWS CloudShell](https://console.aws.amazon.com/cloudshell/) in your browser and run:

```bash
curl -sSL https://raw.githubusercontent.com/mukithc/deshfund/main/deploy-cloudshell.sh | bash
```

With custom API URL:
```bash
export VITE_API_URL="https://api.yourdomain.com/api"
curl -sSL https://raw.githubusercontent.com/mukithc/deshfund/main/deploy-cloudshell.sh | bash
```

The script clones from GitHub, builds, and deploys to S3. Your app will be at:
`http://deshfund-ACCOUNTID-region.s3-website-region.amazonaws.com`

## Prerequisites

- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials
- [Docker](https://www.docker.com/) (for containerized deployment)
- Your backend API URL (the app expects auth, campaigns, investments APIs)

---

## Option 1: AWS App Runner (Recommended – Easiest)

App Runner runs containers with minimal configuration.

### 1. Build and push to Amazon ECR

```bash
# Create ECR repository
aws ecr create-repository --repository-name deshfund --region us-east-1

# Get your AWS account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/deshfund"

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${ECR_URI}

# Build with your API URL
docker build --build-arg VITE_API_URL=https://api.yourdomain.com/api -t deshfund .

# Tag and push
docker tag deshfund:latest ${ECR_URI}:latest
docker push ${ECR_URI}:latest
```

### 2. Create App Runner service

- Go to [AWS App Runner Console](https://console.aws.amazon.com/apprunner/)
- **Create service** → **Container registry** → **Amazon ECR**
- Select your `deshfund` image
- **Service name**: deshfund
- **Port**: 3000
- **Create service**

Your app will be available at a URL like `https://xxxxx.us-east-1.awsapprunner.com`.

---

## Option 2: AWS Amplify (Static Frontend Only)

Amplify hosts the React SPA. Your backend API must be deployed separately.

### 1. Connect repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. **New app** → **Host web app** → Connect your GitHub repo
3. Select the `deshfund` repository and branch

### 2. Configure build

Amplify will use the included `amplify.yml`. Add environment variables in the Amplify Console:

- **VITE_API_URL**: `https://api.yourdomain.com/api` (your backend API URL)

### 3. Deploy

Amplify will build and deploy automatically on each push.

---

## Option 3: Elastic Beanstalk (Docker)

### 1. Initialize EB (first time only)

```bash
# Install EB CLI: pip install awsebcli
eb init -p docker deshfund --region us-east-1
```

### 2. Create environment and deploy

```bash
# Create environment
eb create deshfund-prod

# Set environment variable for API URL (build-time)
eb setenv VITE_API_URL=https://api.yourdomain.com/api

# Deploy
eb deploy
```

### 3. Build with API URL

For Elastic Beanstalk, set `VITE_API_URL` before building. You can add it to `.ebextensions` or use `eb setenv` before deploy. Note: Vite embeds env vars at build time, so ensure the build uses the correct value (e.g., via CodeBuild or a custom build script).

---

## Option 4: ECS Fargate (Production-Grade)

### 1. Build and push image (same as App Runner)

```bash
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/deshfund"

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${ECR_URI}
docker build --build-arg VITE_API_URL=https://api.yourdomain.com/api -t deshfund .
docker tag deshfund:latest ${ECR_URI}:latest
docker push ${ECR_URI}:latest
```

### 2. Create ECS cluster and service

Use the AWS Console or CloudFormation/Terraform to:

- Create an ECS cluster
- Create a task definition using your ECR image
- Create a service with a load balancer
- Configure ALB to route traffic to port 3000

---

## Option 5: S3 + CloudFront (Static Only)

If you only need to host the frontend (no Express server):

### 1. Build for production

```bash
# Set API URL and build
export VITE_API_URL=https://api.yourdomain.com/api
pnpm build
```

### 2. Deploy to S3

```bash
aws s3 sync dist/public s3://your-bucket-name --delete
```

### 3. Create CloudFront distribution

- Create a CloudFront distribution with your S3 bucket as origin
- Set **Default Root Object** to `index.html`
- Add a custom error response: **403** and **404** → return `index.html` (for SPA routing)

---

## Environment Variables

| Variable        | When      | Description                          |
|----------------|-----------|--------------------------------------|
| `VITE_API_URL` | Build     | Backend API base URL (e.g. `/api`)   |
| `PORT`         | Runtime   | Server port (default: 3000)          |
| `NODE_ENV`     | Runtime   | `production`                         |

---

## Backend API

The DeshFund frontend expects a backend API at `VITE_API_URL` with endpoints for:

- **Auth**: `/auth/register`, `/auth/login`
- **Campaigns**: `/campaigns/public/active`, `/campaigns/public/:id`, etc.
- **Investments**: `/investments`, `/investments/my-investments`
- **AI**: `/ai/recommendations`, `/ai/risk-assessment/:id`, etc.

Deploy your backend separately (e.g., EC2, Lambda, ECS) and set `VITE_API_URL` to its URL when building the frontend.

---

## Quick Test (Local Docker)

```bash
# Build
docker build --build-arg VITE_API_URL=http://localhost:8080/api -t deshfund .

# Run
docker run -p 3000:3000 deshfund

# Open http://localhost:3000
```
