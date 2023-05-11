const mongoose        = require('mongoose')
const Schema          = mongoose.schema

const foodSchema = new mongoose.Schema({
        name: {
          type: "string",
          required: true,
        },
        organizationname:{
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
        mealtype: {
          type: "string",
          required: true,
        },
        foodname: {
          type: "string",
          required: true,
        },
        quantity: {
          type: "number",
          required: true,
        },
        additionaldonateitems: {
          type: "string",
          required: true,
        },
        pickupdate: {
          type: "string",
          required: true,
        },
        needy_people_organization:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"NeedyPeople"
        }
      }, {timestamps: true})
      
    
    const DonateFood = mongoose.model('DonateFood',foodSchema) 
    module.exports = DonateFood
    
