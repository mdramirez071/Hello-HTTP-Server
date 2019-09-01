// write your code here
const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Received' + req.method + ' request for: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  });

  //listen for incoming connections
server.listen(8080, 'localhost', null, function() {
    console.log('Server is listening on localhost:8080');
});