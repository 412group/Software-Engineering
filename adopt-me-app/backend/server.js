const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Secret key for JWT (replace with your own secret)
const JWT_SECRET = 'secret';

// In-memory user database (replace with a real database)
const users = [
  { id: 1, username: 'user', password: 'password' },
  // Add more users as needed
];

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username (in-memory database)
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  // Create a JWT token for the authenticated user
  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  // Send the token as a response
  res.json({ token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
