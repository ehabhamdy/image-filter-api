# AWS Elastic Beanstalk Deployment Guide

## Prerequisites
- AWS CLI configured
- EB CLI installed

## Deployment Steps

### 1. Initialize Elastic Beanstalk Application
```bash
cd "project starter code"
eb init
```
- Select region
- Choose Node.js platform
- Select appropriate platform version

### 2. Create Environment
```bash
eb create
```
- Provide environment name
- Wait for environment creation (5-10 minutes)

### 3. Set Environment Variables
```bash
eb setenv API_KEY=udacity-image-filter-2025
```

### 4. Deploy Application
```bash
eb deploy
```

### 5. Get Environment URL
```bash
eb status
```
Note the CNAME - this is your endpoint URL.

## Testing the Endpoint

Test with authentication header:
```bash
curl -H "X-API-Key: udacity-image-filter-2025" \
  "http://YOUR-EB-URL/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg"
```

## Monitoring & Management
```bash
eb open          # Open dashboard in browser
eb logs          # View logs
eb health        # Check health status
eb terminate     # Terminate environment
```

## Screenshot
Take a screenshot of the Elastic Beanstalk dashboard showing:
- Application name
- Environment health (green)
- Running status
- Save as `deployment_screenshot.png` in this directory

