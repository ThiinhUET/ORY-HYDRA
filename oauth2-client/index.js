var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
// app.engine('pug', require('ejs').renderFile);
app.set('view engine', 'pug');


app.get('/', function (req, res) {
    res.render('index', {authServer : 'http://127.0.0.1:4444/oauth2/auth?client_id=auth-code-client&response_type=code&scope=openid+offline&state=123456789'})
  })
console.log("App is running at 4446");
app.listen(4446);