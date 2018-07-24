const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

module.exports = app;