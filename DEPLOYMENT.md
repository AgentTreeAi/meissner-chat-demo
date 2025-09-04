# 🚀 Railway Deployment Guide

## Quick Deploy to Railway

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Meissner chat widget demo"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/meissner-chat-demo.git
   git push -u origin main
   ```

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-deploy!

### Option 2: Railway CLI (Alternative)

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic deployment.

### Custom Domain
1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Settings" → "Domains" 
4. Add your custom domain

## 📊 Monitoring

Railway provides built-in monitoring:
- **Logs**: View real-time application logs
- **Metrics**: Monitor CPU, memory, and network usage
- **Deployments**: Track deployment history

## 🛠️ Local Development

Test locally before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm start

# View at http://localhost:3000
```

## 🎯 Production Checklist

Before deploying to production:

- [ ] Test the chat widget functionality
- [ ] Verify n8n webhook integration
- [ ] Check mobile responsiveness  
- [ ] Update branding/logos if needed
- [ ] Test background image loading
- [ ] Verify SSL certificate (automatic on Railway)

## 🔄 Updates

To update your deployed application:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Railway will automatically redeploy

## 🆘 Troubleshooting

### Common Issues

**Build Fails**:
- Check that `package.json` and `server.js` are in the root directory
- Verify Node.js version compatibility (>=18.0.0)

**App Won't Start**:
- Ensure `npm start` command works locally
- Check Railway logs for error messages

**Chat Widget Not Loading**:
- Verify the Express server is serving static files correctly
- Check browser console for JavaScript errors

**n8n Integration Issues**:
- Test webhook URL independently
- Verify request format matches expected payload
- Check CORS settings if needed

### Railway Specific

**Port Issues**:
- Railway automatically assigns PORT environment variable
- Server.js uses `process.env.PORT || 3000`

**Memory Issues**:
- Railway free tier has memory limits
- Monitor usage in Railway dashboard

## 📞 Support

- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Railway Discord**: [railway.app/discord](https://railway.app/discord)

## 🔗 Useful Links

- [Railway Dashboard](https://railway.app/dashboard)
- [Railway CLI Documentation](https://docs.railway.app/develop/cli)
- [Express.js Documentation](https://expressjs.com/)