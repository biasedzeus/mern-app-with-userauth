const mongoose = require('mongoose');



const User = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type:String,required: true},
    password : {type : String, required: true},
    qoute : {type : String}

},{collection: 'user-data'}

)

const userModel = mongoose.model('UserData',User);

module.exports = userModel;
