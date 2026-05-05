const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const postsRoutes = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());  // allows React to call API
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/posts', postsRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString() 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler (must be last!)
app.use(errorHandler);

module.exports = app;