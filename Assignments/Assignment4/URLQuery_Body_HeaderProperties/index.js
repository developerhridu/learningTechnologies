let express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send("Hello Express Js!");
});


// Body properties
app.get("/body", function (req, res) {
    res.send("Body response!");
});

// header properties
app.post("/header", function (req, res) {
    let userName = req.header('userName');
    let age = req.header('age')
    res.send("User Name: " + userName +", " +"Age: " +age);
    res.end();
})

// query properties
app.post("/", function (req, res) {
    let userName = req.query.userName;
    let age = req.query.age;
    res.send("User Name: " + userName +", " +"Age: " +age);
    res.end();
})
// response header - adding data in header
app.post("/hridu", function (req, res) {
    res.append("name", "Hridu");
    res.append("age", "25");
    res.send("hello header Page");
    res.end();
})







app.listen(9000,function(req,res){
    console.log('Server started to listen at 9000');
})


