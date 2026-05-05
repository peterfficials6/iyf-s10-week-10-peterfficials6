const express = require('express');
const app = express();
const PORT = 3003;

// In-memory posts
let posts = [
    { id: 1, title: 'Getting Started with Node.js', content: 'Node.js is a JavaScript runtime...', author: 'John', createdAt: '2026-01-15T10:00:00Z' },
    { id: 2, title: 'Express.js Fundamentals', content: 'Express is a web framework...', author: 'Jane', createdAt: '2026-01-16T14:30:00Z' },
    { id: 3, title: 'JavaScript Tips', content: 'Here are some useful JavaScript tips...', author: 'John', createdAt: '2026-01-17T09:15:00Z' },
    { id: 4, title: 'Database Design', content: 'Good database design is crucial...', author: 'Bob', createdAt: '2026-01-18T16:45:00Z' }
];

// GET all posts with filtering and sorting
app.get('/api/posts', (req, res) => {
    let result = [...posts];
    
    // Filter by author
    if (req.query.author) {
        result = result.filter(post => 
            post.author.toLowerCase() === req.query.author.toLowerCase()
        );
    }
    
    // Search in title and content
    if (req.query.search) {
        const searchTerm = req.query.search.toLowerCase();
        result = result.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort
    if (req.query.sort === 'newest') {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (req.query.sort === 'oldest') {
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedResult = result.slice(startIndex, endIndex);
    
    res.json({
        posts: paginatedResult,
        pagination: {
            page,
            limit,
            total: result.length,
            pages: Math.ceil(result.length / limit)
        }
    });
});

app.listen(PORT, () => {
    console.log(`Day 3 Query Filtering API running at http://localhost:${PORT}`);
    console.log('Try these queries:');
    console.log('  GET /api/posts?author=John');
    console.log('  GET /api/posts?search=javascript');
    console.log('  GET /api/posts?page=1&limit=2');
    console.log('  GET /api/posts?sort=newest');
});
