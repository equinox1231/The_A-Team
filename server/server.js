var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var http = require('http')
const server = http.createServer(app);
var usersController = require('./controllers/userController');
var cors = require('cors');


app.use(cors())
app.use('/', usersController);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.listen(process.env.PORT || 3000, function () {
    console.log("Apps is on localhost:3000");

});

module.exports = app;