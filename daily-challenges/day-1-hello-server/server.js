const express = require('express');
const app = express();
const PORT = 3001;  // Different port from main project

// Route: /
app.get('/', (req, res) => {
    res.send('Welcome to Hello Server!');
});

// Route: /about
app.get('/about', (req, res) => {
    res.send('Hello Server - A simple Express demo');
});

// Route: /api/time
app.get('/api/time', (req, res) => {
    res.json({
        time: new Date().toISOString(),
        message: 'Current server time'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Day 1 Server running at http://localhost:${PORT}`);
    console.log('Routes:');
    console.log('  GET /');
    console.log('  GET /about');
    console.log('  GET /api/time');
});
