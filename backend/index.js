const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config();

//const db = require('./db')
mongoose.connect("mongodb+srv://Amay:Bluemans@27@cluster0.pulgo.mongodb.net/memed?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});
const memeRouter = require('./routes/router')

const app = express()
const apiPort = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/', memeRouter);
app.listen(apiPort, () => console.log('Server running on port ',apiPort));