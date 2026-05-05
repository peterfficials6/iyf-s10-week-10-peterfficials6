const fs = require('fs');
const path = require('path');

// Read file (synchronous)
const content = fs.readFileSync('hello.js', 'utf-8');
console.log('--- hello.js content ---');
console.log(content);

// Write file
fs.writeFileSync('output.txt', 'Hello, World!');
console.log('Created output.txt');

// Path utilities
console.log('Joined path:', path.join(__dirname, 'files', 'data.json'));
console.log('Extension:', path.extname('photo.jpg'));