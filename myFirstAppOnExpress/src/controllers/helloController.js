// req rcv korbe and res send korbe


exports.hello = (req, res) => {
    res.status(200).json({status: "Success", data: "Hello this is my first express rest API"});
}