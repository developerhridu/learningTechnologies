const fs=require('fs');
let http=require('http');
let server=http.createServer(function (req,res) {

    if(req.url=="/"){
        let data= fs.readFileSync('home.html','utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }
    else if(req.url=="/contact"){
        let data= fs.readFileSync('contact.html','utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);

    }
    else if(req.url=="/about"){

        let data= fs.readFileSync('about.html','utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }

    else if(req.url=="/products"){
        let data= fs.readFileSync('products.html','utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }

});
server.listen(5050);
console.log("Server is running");
