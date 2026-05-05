const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

// In-memory users
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];
let nextId = 3;

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    
    // Validation
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }
    
    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email' });
    }
    
    const newUser = {
        id: nextId++,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Day 2 User API running at http://localhost:${PORT}`);
});
