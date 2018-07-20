// Server Files
const app = require('./app.js');
var http = require('http');

var port = process.env.PORT || 7777;

async function startup() {
  try {
    let httpServer = http.createServer(app).listen(port);
    console.log('Listening on localhost:' + port);
  }
  catch(err) {
    throw err;
  }
}

startup();
