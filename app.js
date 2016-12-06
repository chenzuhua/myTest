var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.set("views",path.join(__dirname,'./views'));
app.set('view engine','html');
app.engine('.html',ejs.__express);

app.use(express.static(path.join(__dirname,'publish')));


require('./routes')(app);

app.listen(8081);
