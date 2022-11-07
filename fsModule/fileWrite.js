var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.writeFile('demo.txt','Hello Hridu', function(err) {
    if(err){
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    }
  });
}).listen(8080)