require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookDemoRoutes = require('./routes/bookDemo');

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      'https://evoclabs.com',
      'https://www.evoclabs.com',
      'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// Routes
app.use('/api', bookDemoRoutes);

// Health check (VERY IMPORTANT FOR RENDER)
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
