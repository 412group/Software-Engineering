const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const db = mongoose.connection;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adopt-me.pets', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  published: Date,
});

const Book = mongoose.model('Book', bookSchema);

const newBook = new Book({
  title: 'Sample Book',
  author: 'John Doe',
  published: new Date(),
});

newBook.save((err, book) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Book saved:', book);
  }
});

Book.find({ author: 'John Doe' }, (err, books) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Books by John Doe:', books);
  }
});

Book.updateOne(
  { title: 'Sample Book' },
  { author: 'Jane Smith' },
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Book updated:', result);
    }
  }
);

Book.deleteOne({ title: 'Sample Book' }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Book deleted');
  }
});
