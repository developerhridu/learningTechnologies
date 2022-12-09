// Requiring express package for routing
const express = require('express')

// Creating app
const app = express();


// The folder path for the files
const folderPath = __dirname+'/Files';

// GET request for single file
app.get('/single',function(req,res) {
    console.log('single file');

    // Download function provided by express
    res.download(folderPath+'/single.txt', function(err) {
        if(err) {
            console.log(err);
        }
    })
})


// GET request to the root of the app
app.get('/', function(req, res){
    res.send("Hello Express Js!");
})

// Creating server at port 3000
app.listen(3000,function(req,res){
    console.log('Server started to listen at 3000');
})
