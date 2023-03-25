const mongoose = require("mongoose");

const donnationPartnerShopSchema = new mongoose.Schema({
    shopName:{
        type:String,
        required:true,
    },
    shopContactNo:{
        type:Number,
        required:true
    },
    shopEmail:{
        type:String,
    },
    shopaddressLine1:{
        type:String,
        required:true,
    },
    shopaddressLine2:{
        type:String,
    },
    shopcity:{
        type:String,
        required:true
    },
    shopprovince:{
        type:String,
        required:true
    },
    donnationPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DonnationPartner'
    },
}, {timestamps:true})

module.exports = new mongoose.model('DonnationPartnerShop' , donnationPartnerShopSchema)
