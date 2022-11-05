const http = require('http');

const server = http.createServer(function(req, res) {

    res.end("Hello Node!");
});

server.listen(5050);
console.log("Server Running");

