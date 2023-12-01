const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

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

app.use(bodyParser.urlencoded({ extended: false }));

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

app.post('/contact', async (req, res) => {
  
  const email = req.body.email;
  const message = req.body.message;

  try {
    if(email && message){
      // Create a Nodemailer transporter
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'engineeingsoftware@gmail.com',
          pass: 'rnnl qfmp lzyw bjur'
        }
      });

      // Define the email options
      let mailOptions = {
        from: email,
        to: 'engingeeingsoftware@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Email: ${email}\nMessage: ${message}`
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Define the email options for the user
      let userMailOptions = {
        from: 'engineeingsoftware@gmail.com',
        to: email,
        subject: 'Thank you for contacting us!',
        text: 'We have received your message and will get back to you as soon as possible.',
        Image: 'logo.png'
      };
  
      // Send the email to the user
      await transporter.sendMail(userMailOptions);

      res.status(200).send('Message sent successfully');
    } else {
      res.status(400).send('Email and message are required');
    }
  } catch (error) {
      res.status(500).send('Internal server error');
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});