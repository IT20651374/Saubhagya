const mongoose = require("mongoose");

const donnationPartnerSchema = new mongoose.Schema({
    partnerName:{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    purose:{
        type:String,
        required:true
    },
    partnershipType:{
        type:String,
        enum: ['Grocery', 'Food', 'Cash', 'Discounts']
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonnationPartnerAddress'
    },
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonnationPartnerShop'
    }
}, {timestamps:true})

module.exports = new mongoose.model('DonnationPartner' , donnationPartnerSchema)
