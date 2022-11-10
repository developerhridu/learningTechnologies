let MongoClinet = require('mongodb').MongoClient;

// MongoDB Hosted on Atlas
// let URL = "mongodb+srv://mrhridu:hridu2277@cluster0.gwpho0l.mongodb.net?retryWrites=true&w=majority";

// MongoDB Hosted on Local Host
let URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

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

        // Find the Column of the cluster
        // findAllDataByProjection(MyMongoClient)

        // Find Data by query
        // findAllDataByQuery(MyMongoClient);

        // Find data by query and set limit
        // findAllDataByLimit(MyMongoClient);

        // Find and sort the data
        findAndSort(MyMongoClient);

        // Find and update Data by query
        // findAndUpdateData(MyMongoClient);

        // creating new collection
        // createNewCollection(MyMongoClient);

        // Deleting a Collection
        // deleteCollection(MyMongoClient);
    }
});  



function InsertData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  // ECE Database e connect hocce 
    let MyCollection = MyDataBase.collection("students"); // Student Collection e connect hocce
   

    let MyData = {name: "Momin", ID: 1602150, Department: "ECE", City: "Rangpur"};
    
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
    let MyDataBase = MyMongoClient.db("ECE");  
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
    let MyDataBase = MyMongoClient.db("ECE");  
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
    let MyDataBase = MyMongoClient.db("ECE");  
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
    let MyDataBase = MyMongoClient.db("ECE");  
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

function findAllDataByProjection(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  
    let MyCollection = MyDataBase.collection("students"); 

    let iteamObj = {};
    let iteamProjection = {projection: {name: ""}} //name Column ta return korbe
    MyCollection.find(iteamObj, iteamProjection).toArray(function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}

function findAllDataByQuery(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  
    let MyCollection = MyDataBase.collection("students"); 

    //let query = {City:"Cumilla"}; //City Cumilla sob data return korbe
    let query = {City: "Cumilla", Department: "ECE"};

    MyCollection.find(query).toArray(function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}

function findAllDataByLimit(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  
    let MyCollection = MyDataBase.collection("students"); 

    //let query = {City:"Cumilla"}; //City Cumilla sob data return korbe
    let query = {City: "Cumilla", Department: "ECE"};

    MyCollection.find(query).limit(3).toArray(function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}

function findAndSort(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  
    let MyCollection = MyDataBase.collection("students"); 

    //let query = {City:"Cumilla"}; //City Cumilla sob data return korbe
    let query = {Department: "ECE"};
    // let mySort = {ID: -1} // descending
    let mySort = {ID: 1} // ascending

    MyCollection.find(query).limit(2).sort(mySort).toArray(function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}

function findAndUpdateData(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE");  
    let MyCollection = MyDataBase.collection("students"); 

    let query = {ID: 1702153};    
    let updateData = {$set: {name: "MR Hridu", City: "Laksam"}};

    MyCollection.updateOne(query, updateData, function(err, resultObj){
        if(err){
            console.log("Data Not Found");
        }
        else{
            console.log(resultObj);
        }
    });
}

function createNewCollection(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE"); 
    MyDataBase.createCollection("teachers", function(err, resultObj){
        if(err){
            console.log("Failed");
        }
        else{
            console.log(resultObj);
        }
    })
}

function deleteCollection(MyMongoClient){
    let MyDataBase = MyMongoClient.db("ECE"); 
    MyDataBase.dropCollection("teachers", function(err, resultObj){
        if(err){
            console.log("Failed");
        }
        else{
            console.log(resultObj);
        }
    })
}


