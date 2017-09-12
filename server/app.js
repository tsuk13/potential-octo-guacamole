var express = require('express');
var bodyParser = require('body-parser');

var app =express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', function( req, res) {
	var test = {title: 'Hello World'};
	res.json(test);
});

app.listen(3001, function () {
	console.log('App started on port 3001!');
})