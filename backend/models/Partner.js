const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const partnerSchema = new mongoose.Schema({
    partnerName: {
        type: "string",
        required: true,
    },
    address: {
        type: "string",
        required: true,
    },
    phone: {
        type: "string",
        required: true,
    },
    email:  {
        type: "string",
        required: true,
    },
    shopName: {
        type: "string",
    },
    shopAddress: {
        type: "string",
    },
    purpose:{
        type:String,
        required:true
    },
    partnershipType:{
        type:String,
        
    },
    quantity: {
        type: "number",
        required: true,
    },
    foodDonator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DonateFood"
    }
}, {timestamps: true})

const Partner = mongoose.model('Partner', partnerSchema)
module.exports = Partner