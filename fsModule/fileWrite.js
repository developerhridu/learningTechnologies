var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 
    if(req.url == "/"){
        fs.writeFile('demo.txt','Hello Hridu', function(err) {
            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write Fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write Success");
                res.end();
            }
          });
  }
}).listen(8080)

console.log("Server is running");