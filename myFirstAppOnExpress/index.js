const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


app.listen(process.env.RUNNING_PORT, function (){
    console.log("successfully "+ process.env.RUNNING_PORT);
})

// app.listen(5000, function (){
//     console.log("Server is running at "+ process.env.RUNNING_PORT);
// })