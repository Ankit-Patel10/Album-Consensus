const express = require('express');
const app = express();
const functions = require('./functions')
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/clientside.js', function(req, res) {
    res.sendFile(__dirname + '/clientside.js');
})

app.get('/functions.js', function(req, res) {
    res.sendFile(__dirname + '/functions.js');
})

app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + '/styles.css');
})

app.get('/indexfunctions.js', function(req, res) {
    res.sendFile(__dirname + '/indexfunctions.js');
})

app.post('/getscore', async function(req, res) {
    try {
        functions.findScore(req.body.album, score => {
            console.log(score);
            res.send(score);
        });
    }
    catch(err) {
        
    }

});

module.exports = app;