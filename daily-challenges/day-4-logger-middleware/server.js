const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3004;

// Logger middleware that writes to file
function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${req.method} ${req.url}\n`;
    
    // Log to console
    console.log(logEntry.trim());
    
    // Log to file
    const logFile = path.join(__dirname, 'access.log');
    fs.appendFileSync(logFile, logEntry);
    
    // Track response time
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const responseLog = `${timestamp} - ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms\n`;
        fs.appendFileSync(logFile, responseLog);
    });
    
    next();
}

// Apply logger to all routes
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send('Logger Middleware Demo');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Some data' });
});

app.post('/api/data', (req, res) => {
    res.status(201).json({ message: 'Created' });
});

app.listen(PORT, () => {
    console.log(`Day 4 Logger Middleware running at http://localhost:${PORT}`);
    console.log('Check access.log file for logs');
});
