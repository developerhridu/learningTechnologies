var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 
    if(req.url == "/"){
        fs.rename('demo.txt','renamed.txt', function(err) {
            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File rename Fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File rename Success");
                res.end();
            }
          });
  }
}).listen(8080)

console.log("Server is running");