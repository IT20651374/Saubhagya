
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ContactSchema = new mongoose.Schema({
    

    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
      
    
}, {timestamps: true})
const Contact = mongoose.model('Contact', ContactSchema)
module.exports = Contact

