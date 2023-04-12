const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    petName:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PetOwner'
    }
}, {timestamps:true})

module.exports = new mongoose.model('Pet' , petSchema)
