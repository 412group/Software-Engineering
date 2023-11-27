const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas database
const uri = 'mongodb+srv://Allwill123:hello123@cluster0.hcsvskr.mongodb.net/AdoptMe';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB Atlas database');
});

// Parse incoming requests
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'adopt-mev2')));

// Define the user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Validate user input
  if (!username || !email || !password) {
    res.status(400).send('Missing required fields');
    return;
  }

  try {
    // Check if email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      res.status(400).send('Email or username already exists');
      return;
    }

  // Create a new user document
  const newUser = new User({
    username,
    email,
    password,
  });

  // Add the user to the database
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Login route
app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});