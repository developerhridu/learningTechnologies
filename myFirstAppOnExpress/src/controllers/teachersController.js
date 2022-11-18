const teachersModel = require('../models/teachersModel');

exports.insertTeacher = (req,res)=>{
    let reqBody= req.body;
    teachersModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


// R=Read
exports.readTeacher=(req,res)=>{
    let Query={};
    let Projection="name tID"
    teachersModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


// U=Update
exports.updateTeacher = (req, res)=>{
    let id=req.params.id; // get id from req parameter from url
    let QUERY={_id:id} // query where _id is equal to req parameter
    let reqBody= req.body;
    teachersModel.updateOne(QUERY,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


// D=Delete
exports.deleteTeacher = (req, res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    teachersModel.remove(QUERY,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}