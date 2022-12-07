let express = require('express');

var app = express();

app.get("/", function (req, res) {
    res.send("Hello Express Js!");
});

app.get("/contact", function (req, res) {
    res.send("Hello Contact Page!");
});


// setting cookiesf
app.get("/myCookie", function (req, res) {
    res.cookie('name', 'Hridu');
    res.cookie('city', 'cumilla');
    res.cookie('age', '25 Years');
    res.end("cookies set successfully!");

});


// deleting or clearing cookies
app.get("/deleteCookie", function (req, res) {
    res.clearCookie('age');
    res.end("cookies Delete successfully!");


});


// response header - adding data in header
app.get("/six", function (req, res) {
    res.append("name", "Hridu");
    res.append("age", "25");
    res.send("hello Six Page");
    res.end();
})


// response redirect -
app.get("/Bangladesh", function (req, res) {
    // res.redirect("http://localhost:8080/India")  // will take to India page
    res.redirect("https://www.google.com/")// will take to Google
    res.end();
})

app.get("/India", function (req, res) {
    res.send("Hello India");
    res.end();
});


// response download
app.get("/myDownload", function (req, res) {
    // res.send("Hello Want to download");
    res.download('/img.jpg');
    res.end();
});


app.listen(8000, function () {
    console.log("Server is running");

})

