const express = require('express');
const app = express();
const fantanoSearch = require('./functions/fantanoSearch');
const bodyParser = require('body-parser');
const pitchfork = require('./functions/pitchfork');
const metacritic = require('./functions/metacritic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + '/styles/styles.css');
})

app.get('/chart.js', function(req, res) {
    res.sendFile(__dirname + '/functions/chart.js');
})

app.get('/ajax.js', function(req, res) {
    res.sendFile(__dirname + '/functions/ajax.js');
})

app.get('/images/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/images/favicon.ico')
})

app.get('/images/github.png', function(req, res) {
    res.sendFile(__dirname + '/images/github.png')
})

app.post('/getfantanoscore', async function(req, res) {
    try {
        fantanoSearch.findScore(req.body.album, score => {
            res.send(score);
        });
    }
    catch(err) {
        
    }

});

app.post('/getpitchforkscore', async function(req, res) {
    try {
        pitchfork.pitchforksearch(req.body.album, score => {
            res.send({"score" : score });
        });
    }
    catch(err) {

    }
})

app.post('/getmetacriticscore', async function(req, res) {
    try {
        metacritic.metacriticSearch(req.body.album, score => {
            score.CriticRating /= 10;
            res.send({"metaScore": score.CriticRating, "userScore": score.UserRating })
        })
    }
    catch(err){

    }
});

module.exports = app;