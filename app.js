const express = require('express');
const app = express();
const functions = require('./functions')
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/clientside.js', function(req, res) {
    res.sendFile(__dirname + '/clientside.js');
})

app.get('/functions.js', function(req, res) {
    res.sendFile(__dirname + '/functions.js');
})

app.post('/getscore', function(req, res) {
    console.log('getting score');
    console.log(req);
    console.log('-----------------------')
    console.log(req.body)
    functions.findScore(req.data);

});

module.exports = app;