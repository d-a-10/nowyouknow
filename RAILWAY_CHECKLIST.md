# Railway Deployment Test Checklist

## ✅ Fixed Issues
- [x] Root package.json build scripts corrected
- [x] Dockerfile optimized for Railway
- [x] Railway.json moved to root with correct Docker path
- [x] Environment variables template created
- [x] Production secrets generated
- [x] Changes pushed to main branch

## 🔄 Manual Steps Required in Railway Dashboard

### 1. Add PostgreSQL Database
1. Go to your Railway project
2. Click "Add Service" → "Database" → "PostgreSQL"
3. Railway will automatically set DATABASE_URL environment variable

### 2. Set Environment Variables
Go to your service → Variables tab and add:

```
NODE_ENV=production
STRAPI_TELEMETRY_DISABLED=true
APP_KEYS=x8zaAFiv6AVY8BfH7Lnexw==,j2mfQiT1OzUXKQLcc6OIvQ==,rxZNd9RFN8RGAxCM5tJ83Q==,XtravXFLycKSDpF6RcEfRw==
JWT_SECRET=ff8fafd95435c8489dc1ec56f812ae7dc358b844130ad58f67ef59ad848aec07
ADMIN_JWT_SECRET=b807f645aea28f0529595a0cac31aee73b6ac8fe38e2530e21cf7182770b1a2e
API_TOKEN_SALT=43tbCuaELWxCk68lcar0Ew==
TRANSFER_TOKEN_SALT=mPulODSKzUyy4RsdFO+9vg==
```

### 3. Set APP_URL (after deployment)
After Railway gives you your app URL, add:
```
APP_URL=https://your-app-name.railway.app
```

## 🧪 Test Deployment

### Check Railway Logs
1. Go to Railway dashboard
2. Click on your service
3. Go to "Deployments" tab
4. Check latest deployment logs

### Verify Endpoints
Once deployed, test these URLs:
- `https://your-app.railway.app/api` - Should return Strapi API info
- `https://your-app.railway.app/admin` - Should show Strapi admin login
- `https://your-app.railway.app/api/movies` - Should return movie data

## 🚨 Common Issues to Check

1. **Build failing**: Check if all environment variables are set
2. **Database connection**: Ensure PostgreSQL service is running
3. **Port issues**: Railway should automatically set PORT env var
4. **Memory limits**: Ensure your Railway plan has sufficient resources

## 📋 After Successful Deployment

1. ✅ Get your Railway app URL
2. ✅ Test API endpoints
3. ✅ Access admin panel and set up admin user
4. ✅ Add some movie data
5. ✅ Ready to deploy frontend to Vercel!