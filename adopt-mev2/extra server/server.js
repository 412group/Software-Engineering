const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

//

const uri = "mongodb+srv://engineeingsoftware:5svUsgrfa168a9Lu@cluster0.hcsvskr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const authRoutes = require('./routes/auth');
    app.use('/auth', authRoutes);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 
}

run().catch(console.dir);
module.exports = { client };


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/signin.html');
});



app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});