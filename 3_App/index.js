const express = require('express');

// app is an instance of express()
const app = express();
var multer  =   require('multer');
var mult = multer();
const bodyParser = require('body-parser');


// application middleware or default middleware
app.use(function(req, res, next) {
    console.log("I am application level middleware")
    next();
})

app.get("/", function (req, res ) {
    res.send("Hello Express Js!");
});

app.get("/about", function (req, res) {
    res.send("About Page");
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



// file uploads using multer
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({ storage : storage}).single('myfile');

app.post('/uploads',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded successfully!");
    });
});

// Multipart form data
app.use(mult.array())
app.use(express.static('public'))
app.post('/multipart', function(req,res){
    let JSONData = req.body;
    res.send(JSON.stringify(JSONData));
})

// Post Application-JSON
app.use(bodyParser.json());
app.post('/appjson', function(req,res){
    let JSONData = req.body;
    // res.send(JSON.stringify(JSONData));
    let name = JSONData.name;
    let city = JSONData.city;
    res.send("name: "+name + ", "+ "city: "+ city );
})

app.listen(9000,function(req,res){
    console.log('Server started to listen at 9000');
})


