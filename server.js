// var express = require("express");
// var path = require("path")
// const bodyParser = require("body-parser");
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.use(express.static('public'));


// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, './public/form.html'));
// });

// app.post('/addName', (req, res) => {
//     const name = req.body.name
//     const age = req.body.age
//     console.log("Received data:", name, age);
//     //  res.status(200).send('Data received successfully'); 
//     res.redirect("/")
// });  


// app.listen(3002, function () {
//     console.log("Example is running on port 3000");
// }); 

const mongoose = require('mongoose');

// Define a Mongoose schema and model for the Person collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://erikdadayan:20081998@cluster0.pgia5pf.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionString);

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB!');
  const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    releaseYear: Number,
    // Add other fields as needed 
  });
  console.log(movieSchema);

  const Movie = mongoose.model('Movie', movieSchema);
});

    

