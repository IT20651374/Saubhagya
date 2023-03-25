const mongoose = require("mongoose");

const donnationPartnerAddressSchema = new mongoose.Schema({
    addressLine1:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    donnationPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DonnationPartner'
    },
}, {timestamps:true})

module.exports = new mongoose.model('DonnationPartnerAddress' , donnationPartnerAddressSchema)
