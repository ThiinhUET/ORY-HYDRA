var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var cors = require('cors');
var path = require('path');

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send("This is login provider server");
})

app.post('/loginRoute', function (req, res) {
    // res.render('login');
    body = req.body;
    console.log(body);
    fetch('http://127.0.0.1:4445/oauth2/auth/requests/login/accept?login_challenge=' + body.login_challenge, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Forwarded-Proto': 'https'
        },
        body: JSON.stringify({
            subject: body.username,
            remember: true,
            remember_for: 3600
        }),
    }).then(response => {
        return response.json();
    }).then(response => {
        console.log(response.redirect_to);
        res.redirect(response.redirect_to);
    })
});

app.get('/consent', function(req, res){
    res.render('consent');
});

console.log("Server is listening at 3001");

app.listen(3001);