var express = require('express');

var app = express();

module.exports = app;

app.listen(3000);
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
require('./paths/middleware.js')(app, express);

var port = 3000;
var ip = "127.0.0.1";
console.log("Listening on http://"+ip+":"+port);
