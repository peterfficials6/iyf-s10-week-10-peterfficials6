function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.url}`);
    
    // Track response time
    const start = Date.now();
    
    // When response finishes, log the time
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${timestamp} - ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });
    
    next(); // Pass to next middleware/route
}

module.exports = logger;