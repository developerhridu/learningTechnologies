
exports.helloGet = (req, res) => {
    res.status(200).json({status: "Success", data: "Hello Get"});
}

exports.helloPost = (req, res) => {
    res.status(300).json({status: "Success", data: "Hello Post"});
}