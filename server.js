var http = require('http');
var express = require('express');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('index.htm', {root: __dirname + '/public/'});
});

http.createServer(app).listen(server_port, server_ip_address);
console.log(server_port);
