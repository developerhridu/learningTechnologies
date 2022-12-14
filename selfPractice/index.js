let mongoClient = require('mongodb').MongoClient;
let URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
let config = {useUnifiedTopology: true};

mongoClient.connect(URL, config, function(err, myMongoClient) {
    if (err) {
        console.log("Conncention Failed")
    }
    else {
        console.log("Connection Successful");

        // insertData(myMongoClient);
        // deleteOneData(myMongoClient);
        // deleteManyData(myMongoClient);
        findData(myMongoClient);
    }
});

function insertData(myMongoClient) {
    let myDataBase = myMongoClient.db("ECE");
    let myCollection = myDataBase.collection("students");
    // {name: "", ID: 17021, Department: "ECE", City: ""},
    let myData = [
        {name: "Maliha", ID: 1702114, Department: "ECE", City: "Rangpur"},
        {name: "Akash", ID: 1802111, Department: "ECE", City: "Jassore"},
        {name: "Momin", ID: 1602105, Department: "ECE", City: "Rangpur"},
        {name: "Naim", ID: 1702130, Department: "ECE", City: "Pabna"},
        {name: "Rishad", ID: 1702157, Department: "ECE", City: "Rangpur"}
    ];

    myCollection.insertMany(myData, function (err, res){
        if(err){
            console.log("Data Insertion failed" + err);
        }
        else
        {
            console.log("Data Insertion Successed"  + res.insertedCount);
        }
    });

}

function deleteOneData(myMongoClient){
    let myDataBase = myMongoClient.db("ECE");
    let myCollection = myDataBase.collection("students");

    let myQuery = { name: "Akash"};

    myCollection.deleteOne(myQuery, function(err, result){
        if(err)
        {
            console.log("Delete Failed" + err);
        }
        else{
            console.log("Delete Success "+ result);
        }
    });
}

function deleteManyData(myMongoClient){
    let myDataBase = myMongoClient.db("ECE");
    let myCollection = myDataBase.collection("students");

    let myQuery = { City: "Rangpur"};

    myCollection.deleteMany(myQuery, function(err, result){
        if(err)
        {
            console.log("Delete Failed" + err);
        }
        else{
            console.log("Delete Success "+ result);
        }
    });
}

function findData(myMongoClient){
    let myDataBase = myMongoClient.db("ECE");
    let myCollection = myDataBase.collection("students");

    // let myQuery = { City: "Dinajpur"};
    let myQuery = { name: /^H/};  // name started with H

    myCollection.find(myQuery).toArray(function (err, result){
        if(err)
        {
            console.log("Find Failed" + err);
        }
        else{
            console.log(result);
        }
    });
}