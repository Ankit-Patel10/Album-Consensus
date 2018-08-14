const express = require('express');
const app = express();
const functions = require('./functions/functions');
const bodyParser = require('body-parser');
const multer = require('multer');
const pitchforkfunctions = require('./functions/pitchforkfunctions');
const metacriticfunctions = require('./functions/metacriticfunctions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/functions.js', function(req, res) {
    res.sendFile(__dirname + '/functions/functions.js');
})

app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + '/styles/styles.css');
})

app.get('/indexfunctions.js', function(req, res) {
    res.sendFile(__dirname + '/functions/indexfunctions.js');
})

app.post('/getfantanoscore', async function(req, res) {
    try {
        functions.findScore(req.body.album, score => {
            console.log('fantano', score);
            res.send(score);
        });
    }
    catch(err) {
        
    }

});

app.post('/getpitchforkscore', async function(req, res) {
    console.log('getting pitchforkscore');
    try {
        pitchforkfunctions.pitchforksearch(req.body.album, score => {
            console.log('pitchfork', score);
            res.send({"score" : score });
        });
    }
    catch {

    }
})

app.post('/getmetacriticscore', async function(req, res) {
    try {
        metacriticfunctions.metacriticSearch(req.body.album, score => {
            console.log('metacritic', score);
            score.CriticRating /= 10;
            res.send({"metaScore": score.CriticRating, "userScore": score.UserRating })
        })
    }

    catch {

    }
});

module.exports = app;