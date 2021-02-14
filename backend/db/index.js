const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/memed', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
//const connection = mongoose.Connection;
//connection.once("open", function() {console.log("COnnection with Mongodb was successful");});
const db = mongoose.connection

module.exports = db