var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var http = require('http')
const server = http.createServer(app);
var usersController = require('./controllers/userController');
const path = require('path');



app.use('/', usersController);

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


server.listen(process.env.PORT || 5000, function () {
    console.log("Apps is on localhost:5000");

});

module.exports = app;