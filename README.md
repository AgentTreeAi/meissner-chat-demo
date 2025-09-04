# Meissner AI Chat Widget Demo

A responsive AI-powered chat widget demo for Meissner filtration systems and technical support.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop and mobile
- **AI Integration** - Connected to n8n webhook for intelligent responses
- **Modern UI** - Clean, professional interface with animations
- **Customizable** - Easy to modify colors, branding, and responses
- **Production Ready** - Optimized for deployment

## 🌐 Live Demo

The demo is deployed and accessible at your Railway URL after deployment.

## 📱 What's Included

- Interactive chat widget with toggle button
- Real-time message exchange
- Typing indicators and animations
- Mobile-responsive design
- Custom branding for Meissner
- Background screenshot integration

## 🛠️ Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript
- **Backend**: Node.js with Express
- **Deployment**: Railway
- **AI Integration**: n8n webhook

## 🚀 Deployment Instructions

### Deploy to Railway

1. **Create Railway Account**: Go to [railway.app](https://railway.app) and sign up

2. **Connect GitHub**: Link your GitHub account to Railway

3. **Deploy Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository
   - Railway will automatically detect Node.js and deploy

4. **Environment Variables**: No additional environment variables needed

5. **Custom Domain** (Optional):
   - Go to your project settings
   - Add a custom domain if desired

### Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open in browser
open http://localhost:3000
```

## 🎨 Customization

### Branding
- Update company logo URL in the HTML (line 535)
- Modify company name and tagline (lines 540, 543)
- Change color scheme in CSS variables (lines 28-45)

### Chat Responses
- Edit the responses object in JavaScript (lines 610-620)
- Modify the n8n webhook URL (line 696)

### Background
- Replace `meissner-screenshot.png` with your own background image
- Update the background-image URL in CSS (line 16)

## 📡 API Integration

The widget connects to n8n webhook at:
```
https://n8n.agenttree.agency/webhook/90c53a06-0720-47d3-9eeb-8bebe860c100
```

Request format:
```json
{
  "message": "user message",
  "id": "session_id",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 📝 File Structure

```
├── index.html          # Main demo page with chat widget
├── meissner-screenshot.png  # Background image
├── server.js           # Express server for Railway
├── package.json        # Node.js dependencies
├── railway.json        # Railway deployment config
└── README.md          # This file
```

## 🔧 Configuration

The chat widget is fully self-contained in `index.html` with configuration sections clearly marked:

- **Colors & Branding** (lines 28-45)
- **Company Information** (lines 527-545)
- **AI Responses** (lines 610-620)
- **API Integration** (lines 696-706)

## 📞 Support

For questions about the chat widget or deployment, please contact the development team.

---

**Built for Meissner** - Filtration Excellence Since 1976