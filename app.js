var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var serv = require("http").Server(app);
var schedule = require('node-schedule');


// make app use the `bodyParser()` middleware for all routes
// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.sendFile(__dirname+'/client/index.html');
});

//  info route
// app.get('/visitor', function(req, res){
//   res.sendFile(__dirname+'/visitor/visitor.html');
// });

// superUser  route
// app.get('/admin', function(req, res){
//   res.sendFile(__dirname+'/admin/admin.html');
// });

// json test route
app.get('/jsonTest', function(req, res){
  res.sendFile(__dirname+'/jsonTest/jsonTest.html');
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userValues = req.body.values;
  var otherUserValues = req.body.moreValues;

  var html = 'your user values: ' + userValues + '.<br>' +
             'your other user values  <br>' + otherUserValues + '<br>'+ 
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT || 3000);
	console.log("Server Started on port 3000");


