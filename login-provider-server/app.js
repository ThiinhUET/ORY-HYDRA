var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send("This is login provider server");
})

app.listen(3001);