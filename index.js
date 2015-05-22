var express = require('express');
var fs = require('fs');
var http = require('http');
var notes = [];
var bodyParser = require('body-parser');
var app = express();
var server;

/* Configure Express */

// set port
app.set('port', 3000);
// Any HTTP request will be satisfied using the content under './client'
app.use(express.static('./client'));
// use a body parse for JSON requests
app.use(bodyParser.json());

app.post('/bookings', function (req, res) {
  var booking = req.body;
  console.log(booking);
  res.status(200).send({
    success: true
  });
});

server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});