let express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("Hello Express Js!");
});

app.get("/contact", function (req, res) {
    res.send("Hello Contact Page!");
});

app.listen(8080, function () {
    console.log("Server is running");

})

