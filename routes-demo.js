const express = require('express');
const app = express();
const PORT = 3001;

// Send plain text
app.get('/text', (req, res) => {
    res.send('Plain text response');
});

// Send JSON
app.get('/json', (req, res) => {
    res.json({ 
        message: 'JSON response', 
        success: true 
    });
});

// Send with status code
app.get('/error', (req, res) => {
    res.status(400).json({ 
        error: 'Bad request' 
    });
});

// Redirect
app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});

app.get('/new-page', (req, res) => {
    res.send('This is the new page!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Dynamic route with parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ 
        message: `Getting user ${userId}` 
    });
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ 
        postId, 
        commentId,
        message: `Comment ${commentId} on post ${postId}` 
    });
});