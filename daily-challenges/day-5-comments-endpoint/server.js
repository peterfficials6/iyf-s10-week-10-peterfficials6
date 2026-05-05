const express = require('express');
const app = express();
const PORT = 3005;

app.use(express.json());

// Posts with comments
let posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'Hello world',
        comments: [
            { id: 1, text: 'Great post!', author: 'Alice', createdAt: '2026-01-15T10:00:00Z' },
            { id: 2, text: 'Thanks for sharing', author: 'Bob', createdAt: '2026-01-15T11:00:00Z' }
        ]
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'Another post',
        comments: []
    }
];

let nextCommentId = 3;

// GET comments for a post
app.get('/api/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post.comments);
});

// POST add comment to a post
app.post('/api/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    const { text, author } = req.body;
    
    if (!text || !author) {
        return res.status(400).json({ error: 'Text and author required' });
    }
    
    const newComment = {
        id: nextCommentId++,
        text,
        author,
        createdAt: new Date().toISOString()
    };
    
    post.comments.push(newComment);
    res.status(201).json(newComment);
});

// DELETE a comment
app.delete('/api/posts/:postId/comments/:commentId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);
    
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    const commentIndex = post.comments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    
    post.comments.splice(commentIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Day 5 Comments Endpoint running at http://localhost:${PORT}`);
    console.log('Try:');
    console.log('  GET /api/posts/1/comments');
    console.log('  POST /api/posts/1/comments');
    console.log('  DELETE /api/posts/1/comments/1');
});
