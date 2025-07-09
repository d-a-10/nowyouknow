# NowYouKnow Deployment Guide

## Quick Deployment Options

### Option 1: Vercel + Railway (Recommended)
1. **Frontend (Next.js)**: Deploy to Vercel
2. **Backend (Strapi)**: Deploy to Railway
3. **Database**: PostgreSQL on Railway

### Option 2: DigitalOcean App Platform
- Deploy both frontend and backend on DigitalOcean
- Use managed PostgreSQL database

## Step-by-Step Deployment

### 1. Backend Deployment (Strapi)

#### Railway Deployment:
1. Create account at railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository and `cdn` folder
4. Add environment variables from `.env.production`
5. Railway will automatically detect and deploy Strapi

#### Environment Variables for Railway:
```
NODE_ENV=production
APP_URL=https://your-railway-app-url.railway.app
DATABASE_URL=your-postgresql-connection-string
JWT_SECRET=generate-random-string
ADMIN_JWT_SECRET=generate-random-string
API_TOKEN_SALT=generate-random-string
TRANSFER_TOKEN_SALT=generate-random-string
APP_KEYS=key1,key2,key3,key4
```

### 2. Frontend Deployment (Next.js)

#### Vercel Deployment:
1. Create account at vercel.com
2. Import your repository
3. Set root directory to `nowyouknow`
4. Add environment variables:
   ```
   NEXT_PUBLIC_SERVER_BASE_URL=https://your-strapi-url.railway.app/api
   NEXT_PUBLIC_STRAPI_TOKEN=your-production-api-token
   ```

### 3. Domain Configuration

#### DNS Settings for nowyouknow.ae:
1. **Main site**: Point A record to Vercel IP or CNAME to your-app.vercel.app
2. **API subdomain**: Point CNAME api.nowyouknow.ae to your-railway-app.railway.app

#### Domain Records:
```
Type: A
Name: @
Value: 76.76.19.19 (Vercel IP)

Type: CNAME
Name: api
Value: your-railway-app.railway.app
```

### 4. Generate Production Secrets

Run these commands to generate secure secrets:

```bash
# Generate JWT secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate API token salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate transfer token salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate APP_KEYS (4 keys)
node -e "console.log(Array.from({length: 4}, () => require('crypto').randomBytes(16).toString('base64')).join(','))"
```

### 5. Production Build Test

Before deploying, test the production build locally:

```bash
# Backend
cd cdn
npm run build
npm run start

# Frontend
cd nowyouknow
npm run build
npm run start
```

### 6. SSL Certificate
Both Vercel and Railway provide automatic SSL certificates.

## Alternative: Single Platform Deployment

### DigitalOcean App Platform:
1. Create app with both services
2. Add PostgreSQL database
3. Configure environment variables
4. Deploy both frontend and backend

### Environment Variables Summary:
- Update `.env.production` files with actual production values
- Never commit production secrets to git
- Use your hosting platform's environment variable settings

## Post-Deployment Checklist:
- [ ] Backend accessible at api.nowyouknow.ae
- [ ] Frontend accessible at nowyouknow.ae
- [ ] Database connected and migrated
- [ ] Admin panel accessible
- [ ] API endpoints working
- [ ] Movie data displaying correctly
- [ ] SSL certificates active