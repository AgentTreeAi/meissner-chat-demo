const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files
app.use(express.static('.', {
  maxAge: '1d', // Cache static assets for 1 day
  etag: true
}));

// Handle all routes by serving index.html (for SPA-like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Meissner Chat Demo running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} to view the demo`);
});