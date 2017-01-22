var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);




//app.set("views",path.join(__dirname,'./views'));
//app.use(express.static(path.join(__dirname,'./public')));
app.set("views",path.join('E:/word/mobom/trunk/appMoto/www'));
app.use(express.static(path.join('E:/word/mobom/trunk/appMoto/www')));


app.set('view engine','html');
app.engine('.html',ejs.__express);

require('./routes')(app,io);

http.listen(8082);
