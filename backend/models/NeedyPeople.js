
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const NeedyPeopleSchema = new mongoose.Schema({
    

    organization_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },

    contact_no:{
        type:String,
        required:true, 
        unique:true
    },

    email:{
        type:String,
        required:true,
    },

    no_of_children:{
        type:Number,
        required:true
    },

    no_of_adults:{
        type:Number,
        required:true
    },

    meals:{
        type:String,
        required:true
    },

    food_preferences:{
        type:String,
        required:true
    },

    other_required_nececities:{
        type:String,
        required:true
    }

    /*img:{
        data: Buffer,
        contentType: String
    }*/
      
    
}, {timestamps: true})
const NeedyPeople = mongoose.model('NeedyPeople', NeedyPeopleSchema)
module.exports = NeedyPeople

