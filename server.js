//npm install nodemon rồi chạy nodemon index.js để không cần chạy lại server
//npm install body-parser truyền phương thức dạng post về server
//npm install mongoose
var express = require('express');
var mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/product');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/'));
//connect mongoDB
//Import the mongoose module
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/productmanage';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//router
app.use(adminRoutes);
app.use(productRoutes)
// listen
app.listen(8080, function(){
    console.log('listening on *:8080');
});