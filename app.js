var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("views",path.join(__dirname,'./views'));
app.set('view engine','html');
app.engine('.html',ejs.__express);

app.use(express.static(path.join(__dirname,'./public')));

require('./routes')(app,io);

http.listen(8081);
