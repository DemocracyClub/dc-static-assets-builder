# DC Static Assets Builder

A simple static site generator for creating static pages that are synced to S3.

This project uses Eleventy to build assets. 

At the moment this is useful for two things:

1. deploying static assets like logos and core CSS for use across DC when needed
2. creating a 'maintaince' or failover page.

In future, it might host more core assets.

Pages are hosted at e.g `http://dc-shared-frontend-assets.s3-website.eu-west-2.amazonaws.com/maintenance/`

### Installing

```bash
npm install
```

## Development

### Development Server

Start the development server with auto-reload:

```bash
npm run dev
```

## Deployment

```bash
./scripts/deploy.sh
```
