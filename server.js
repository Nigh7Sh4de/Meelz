var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.htm', {root: __dirname + '/public/'});
});

http.createServer(app).listen(8888);
