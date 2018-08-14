const unirest = require('unirest');

function metacriticGet(albumName, callback) {
    unirest.get("https://api-marcalencc-metacritic-v1.p.mashape.com/album/" + albumName + "/{year}")
    .header("X-Mashape-Key", "4vjDgVKVXemshrytW6DtcuzPHJGap1nCssUjsnps2YOzQ8hGNe")
    .header("Accept", "application/json")
    .end(function (result) {
        callback(result.body[0].Rating);
    });
}

function metacriticSearch(albumName, callback) {
    metacriticGet(albumName, result => {
        callback(result)
    })
}

module.exports = {
    metacriticSearch
};