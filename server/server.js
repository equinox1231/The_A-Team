var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var http = require('http')
const server = http.createServer(app);
var usersController = require('./controllers/userController');
var cors = require('cors');
const path = require('path');



app.use(cors())
app.use('/', usersController);

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

const PORT = process.env.PORT || 5000;

server.listen(PORT, function () {
    console.log("Apps is on localhost:5000");

});

module.exports = app;