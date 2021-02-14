const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')
const mongoose = require("mongoose");

//const db = require('./db')
mongoose.connect(process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/memed", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});
const memeRouter = require('./routes/router')

const app = express()
const apiPort = process.env.apiPort || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/', memeRouter);
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('memesss/build'));
}

app.listen(apiPort, () => console.log('Server running on port ',apiPort))