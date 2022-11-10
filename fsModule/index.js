let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){

    if(req.url == "/"){
        let data =  fs.readFileSync('Home.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        
    }

});
server.listen(4040, function(err){
    if(err){
        console.log("Failed")
    }
    else{
        console.log("Server is running");
    }
});
