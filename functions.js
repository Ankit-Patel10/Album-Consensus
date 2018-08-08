const mongodb = require('mongodb'); 

function findScore(albumName, callback) {
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
			resolve(result.Score);
		});
	})
	callback(results);
    });
}

module.exports = {
	findScore
};