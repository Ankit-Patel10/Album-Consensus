const mongodb = require('mongodb'); 

function findScore(albumName) {
	console.log('findScore invoked');
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
			console.log(result.Score);
			resolve(result.Score);
		});
	})
	return results;
    });
}

module.exports = {
	findScore
};