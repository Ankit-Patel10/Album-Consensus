var p = require('pitchfork')

function pitchforksearch(albumName, callback) {
    var s = new p.Search(albumName);
    s.on("ready", function(results){
        if(results == undefined ) {
            callback('Can\'t find album');
        }
        results.forEach(function(review, idx) {
            if(review.attributes.album == albumName) {
                callback(review.attributes.score);
            }
        })
    })
}

module.exports = {
    pitchforksearch
}