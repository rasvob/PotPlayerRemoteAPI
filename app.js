var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var robot = require("robotjs");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('App is running');
});

app.get('/action/pause', function (req, res) {
    robot.keyTap('space');
    res.type('text/plain');
    res.send('pause');
});

app.get('/action/fullscreen', function (req, res) {
    robot.keyTap('f');
    res.type('text/plain');
    res.send('fullscreen');
});

app.get('/action/forward', function (req, res) {
    robot.keyTap('right');
    res.type('text/plain');
    res.send('forward');
});

app.get('/action/backward', function (req, res) {
    robot.keyTap('left');
    res.type('text/plain');
    res.send('backward');
});

console.log("App running on: " + port);
app.listen(port);
module.exports = app;
