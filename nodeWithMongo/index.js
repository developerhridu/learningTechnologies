let MongoClinet = require('mongodb').MongoClient;
let URL = "mongodb+srv://mrhridu:hridu2277@cluster0.gwpho0l.mongodb.net?retryWrites=true&w=majority";

let config = {useUnifiedTopology: true};
MongoClinet.connect(URL, config, function(err, MyMongoClient) {
    if(err){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Successful");

        // to insert
        // InsertData(MyMongoClient);

        // to delete an iteam
        // deleteData(MyMongoClient)

        // to delete all data
        // deleteAll(MyMongoClient)

        // Find a Data of the cluster
        // findOneData(MyMongoClient);

        // Find all data from the cluster
        findAllData(MyMongoClient);
    }
});  



function InsertData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("School");  // School Database e connect hocce 
    let MyCollection = MyDataBase.collection("students"); // Student Collection e connect hocce
   

    let MyData = {name: "Kamrul", ID: 1702151, Department: "ECE", City: "Rangpur"};
    
    // now inserting MyData to the database
    MyCollection.insertOne(MyData, function(err)
    {
        if(err){
            console.log("Data Insertion failed");
        }
        else
        {
            console.log("Data Insertion Successed");
        }
    });
    
}

function deleteData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("School");  
    let MyCollection = MyDataBase.collection("students");  

    let data = {ID: 1702151}; // je iteam ta delete korbo se iteam er ekta hits diye dicchi

    MyCollection.deleteOne(data,function(err){
        if(err){
            console.log("Data Not Deleted");
        }
        else{
            console.log("Data is Deleted");
        }
    })
}

function deleteAll(MyMongoClient){
    let MyDataBase = MyMongoClient.db("School");  
    let MyCollection = MyDataBase.collection("students"); 

    MyCollection.deleteMany(function(err, resultObj){
        if(err){
            console.log("Data Not Deleted");
        }
        else{
            console.log(resultObj);
        }
    })
}

function findOneData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("School");  
    let MyCollection = MyDataBase.collection("students"); 
    

    // let data = {};    // will return first row of the collection
    // let data = {name: "Hridu"};
    let data = {ID: 1702151};
    MyCollection.findOne(data, function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    })
}

function findAllData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("School");  
    let MyCollection = MyDataBase.collection("students"); 


    // to return all find data as array
    MyCollection.find().toArray(function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}