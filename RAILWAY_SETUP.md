# Railway Deployment Setup

## Prerequisites
1. Railway account at railway.app
2. Project connected to this GitHub repository

## Environment Variables Required in Railway Dashboard

Add these environment variables in your Railway project settings:

```bash
NODE_ENV=production
STRAPI_TELEMETRY_DISABLED=true

# Generate these using the commands below:
APP_KEYS=key1,key2,key3,key4
JWT_SECRET=your-jwt-secret
ADMIN_JWT_SECRET=your-admin-jwt-secret
API_TOKEN_SALT=your-api-token-salt
TRANSFER_TOKEN_SALT=your-transfer-token-salt

# Railway will set this automatically when you add PostgreSQL
DATABASE_URL=postgresql://username:password@host:port/database

# Set this to your Railway app URL
APP_URL=https://your-app-name.railway.app
```

## Generate Secure Secrets

Run these commands to generate production secrets:

```bash
# Generate APP_KEYS (4 keys)
node -e "console.log(Array.from({length: 4}, () => require('crypto').randomBytes(16).toString('base64')).join(','))"

# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate Admin JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate API token salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate transfer token salt
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

## Deployment Steps

1. **Add PostgreSQL Database**:
   - In Railway dashboard, click "Add Service" → "PostgreSQL"
   - Railway will automatically set DATABASE_URL

2. **Configure Environment Variables**:
   - Go to your service settings
   - Add all the environment variables listed above
   - Use the generated secrets from the commands above

3. **Deploy**:
   - Push changes to main branch
   - Railway will automatically build and deploy
   - Check logs for any issues

4. **Verify Deployment**:
   - Visit your Railway app URL
   - Check `/api` endpoint is working
   - Access admin panel at `/admin`

## Troubleshooting

### Common Issues:

1. **SWC Native Binding Error**: 
   - **FIXED**: Removed Docker completely, using only Nixpacks
   - Added postinstall script to rebuild @swc/core
   - Added .nvmrc files for Node version consistency
   - Clean node_modules approach ensures proper native bindings

2. **Build Failures**:
   - Check Railway logs for build/runtime errors
   - Ensure all environment variables are set
   - Verify DATABASE_URL is automatically set by Railway

3. **Port Issues**:
   - Make sure port 1337 is exposed and Railway PORT env is handled
   - Railway automatically sets PORT environment variable

### SWC Fix Implementation:
- ✅ Nixpacks builder (no Docker)
- ✅ Node.js 18.20.8 consistency (.nvmrc files)
- ✅ Postinstall script: `npm rebuild @swc/core`
- ✅ Clean node_modules on deployment
- ✅ Proper native binding compilation

### Build Process:
- Uses Nixpacks for optimal Node.js native binding support
- Rebuilds @swc/core during postinstall
- Consistent Node.js version across all environments