var express = require('express');
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sha1 = require('sha1');
var app = express();
var server;

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
});

function getValue(value) {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  return value;
}

function getTable(booking) {
  var response = '<table>';
  var keys = Object.keys(booking);
  keys.forEach(function (key) {
    response += '<tr><td><b>' + key + '</b></td><td>' + getValue(booking[key]) + '</td></tr>';
  });
  return response + '</table>';
}

/* Configure Express */

// set port
app.set('port', 8080);
// Any HTTP request will be satisfied using the content under './client'
app.use(express.static('./client'));
// use a body parse for JSON requests
app.use(bodyParser.json());

app.post('/bookings', function (req, res) {
  var booking = req.body;
  var bookingString = JSON.stringify(booking);

  booking.id = 'booking-' + sha1(bookingString);
  booking.created = new Date().toString();

  var mailOptions = {
    from: 'Cab Mailer Service <>', // sender address
    to: '<>,<>,<>', // list of receivers
    //to: 'adityasharat@gmail.com',
    subject: 'Alert: Cab Booking: ' + booking.id, // Subject line
    text: bookingString, // plaintext body
    html: getTable(booking) // html body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

  res.status(200).send({
    success: true,
    id: booking.id
  });
});

server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
