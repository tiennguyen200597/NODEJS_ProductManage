//npm install nodemon rồi chạy nodemon index.js để không cần chạy lại server
//npm install body-parser
var express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/product');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/'));

// index page
// app.get(['/','page-login.html'], function(req, res) {
//     res.render('page-login');
// });
// app.get('/index.html', function(req, res) {
//     res.render('index');
// });
// app.get('/page-register.html', function(req, res) {
//     res.render('page-register');
// });
//router
app.use(adminRoutes);
app.use(productRoutes)
// app.post('/xuly.html', function(req, res) {
//     res.render('page-register');
// });

app.listen(8080, function(){
    console.log('listening on *:8080');
});