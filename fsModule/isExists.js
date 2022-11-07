var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 
    if(req.url == "/"){
        fs.exists('renamed.txt',function(err) {
            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Exists");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Doesn't Exists");
                res.end();
            }
          });
  }
}).listen(8080)

console.log("Server is running");