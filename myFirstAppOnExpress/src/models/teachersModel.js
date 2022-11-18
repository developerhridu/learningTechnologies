const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: String,
    tID: Number,
    Department: String,
    Position: String,
    City: String
})

const teachersModel = mongoose.model('teachers', dataSchema);
module.exports = teachersModel;