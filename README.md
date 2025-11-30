# Image Filter Microservice

RESTful API for filtering images with authentication.

## Setup

```bash
cd "project starter code"
npm install
```

## Run Locally

```bash
npm run dev
```

Server runs on `http://localhost:8082`

## API Usage

### Endpoint
`GET /filteredimage?image_url={URL}`

### Authentication
Required header: `X-API-Key: udacity-image-filter-2025`

### Example
```bash
curl -H "X-API-Key: udacity-image-filter-2025" \
  "http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg" \
  --output filtered.jpg
```

### Response Codes
- `200` - Success, returns filtered image
- `401` - Unauthorized (missing/invalid API key)
- `422` - Invalid or missing image_url
- `500` - Server error

## Deployment
See `deployment_screenshots/DEPLOYMENT.md` for AWS Elastic Beanstalk deployment instructions.

