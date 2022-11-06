const http = require("http");
const dt = require("./index")

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, Home Page </h1>\n" + dt.myDateTime());
    // res.write("Hridu")
    res.end("Hridu");
  } else if (req.url === "/about") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, About Page </h1>");
    res.end();
  } else if (req.url === "/contact") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, Contact Page </h1>");
    res.end();
  }
});

server.listen(5050);
console.log("Server Running");
