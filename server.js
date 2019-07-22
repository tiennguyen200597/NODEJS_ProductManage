var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

// index page
app.get('/', function(req, res) {
    res.render('page-login');
});
app.get('/page-login.html', function(req, res) {
    res.render('index');
});
app.get('/page-register.html', function(req, res) {
    res.render('page-register');
});
// app.post('/xuly.html', function(req, res) {
//     res.render('page-register');
// });

app.listen(8080, function(){
    console.log('listening on *:8080');
});