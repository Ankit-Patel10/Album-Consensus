const express = require('express');
const app = express();
const mongodb = require('mongodb');  

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

function findScore(albumName) {
    mongodb.MongoClient.connect('mongodb://admin:password1@ds143511.mlab.com:43511/spotifyviewer', async function(err, client) {
    if(err) {
        throw err;
    }
	let db = client.db('spotifyviewer');
	var results = await new Promise(function(resolve, reject) {
		db.collection('test').findOne({Album: albumName}, function(err, result) {
			if (err) {
				reject(err);
			}
			resolve(result);
			db.close();
		});
	})
	return results;
    });
}


module.exports = app;