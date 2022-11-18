let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){
    console.log(res);

    if(req.url == "/"){
        // let data =  fs.readFileSync('Home.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Hello </h1>`);
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
         