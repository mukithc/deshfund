# Connect DeshFund to Your AWS Account

I can't access your AWS account directly (for security). Follow these steps to install the tools and run the deployment.

---

## Step 1: Install AWS CLI (5 min)

1. Download: https://awscli.amazonaws.com/AWSCLIV2.msi
2. Run the installer
3. **Restart your terminal** (or Cursor) after install
4. Configure your credentials:
   ```powershell
   aws configure
   ```
   Enter:
   - **AWS Access Key ID**: (from IAM user)
   - **AWS Secret Access Key**: (from IAM user)
   - **Default region**: `us-east-1`
   - **Output format**: `json`

> Don't have access keys? AWS Console → IAM → Users → Your user → Security credentials → Create access key

---

## Step 2: Install Docker Desktop (5 min)

1. Download: https://www.docker.com/products/docker-desktop/
2. Install and **start Docker Desktop**
3. Wait until Docker is running (whale icon in system tray)

---

## Step 3: Run the deployment script

Open PowerShell in the DeshFund folder and run:

```powershell
cd "c:\Users\mukit\OneDrive\Desktop\DeshFund"

# Deploy (use your real API URL when you have one)
.\deploy-aws.ps1 -ApiUrl "https://api.yourdomain.com/api"

# Or for testing with placeholder:
.\deploy-aws.ps1 -ApiUrl "http://localhost:8080/api"
```

The script will:
1. Create an ECR repository
2. Build the Docker image
3. Push to AWS
4. Show you the link to create the App Runner service

---

## Step 4: Create App Runner service (one-time)

After the script finishes, go to the AWS Console link it shows and:
1. Create service → Container registry → Amazon ECR
2. Select the `deshfund` image
3. Port: **3000**
4. Create & deploy

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `aws: command not found` | Install AWS CLI, restart terminal |
| `docker: command not found` | Install Docker Desktop, ensure it's running |
| `Unable to locate credentials` | Run `aws configure` |
| `denied: Your authorization token has expired` | Run the ECR login step again |
