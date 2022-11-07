var http = require('http');
let URL = require('url');

let server = http.createServer(function(req, res) {
    let myURL = "http://localhost:8080/blog.html?year=2017&month=July";
    let myURLObj = URL.parse(myURL,true);
    let myHost = myURLObj.host;
    let mySearch = myURLObj.search;
    let myPath = myURLObj.pathname;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(mySearch); //?year=2017&month=July
    res.write(myHost); //localhost:8080
    res.write(myPath); //  /blog.html
    res.end();

});
server.listen(5050);
console.log("Server is running");