const mongodb = require('mongodb'); 

function showAlert(){
    alert("This is an alert!");
}

function findScore(albumName) {
	alert("FIND SCORE INVOKED");
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
	return results;
    });
}