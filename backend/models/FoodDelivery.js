const mongoose        = require('mongoose')
const Schema          = mongoose.Schema
const deliverySchema = new mongoose.Schema({
  
        deliver_name: {
          type: "string",
          required: true,
        },
        nic:{
          type: "string",
          required: true,
        },
        phone: {
          type: "string",
          required: true,
        },
        email: {
          type: "string",
          required: true,
        },
        donar_name:  {
          type: "string",
          required: true,
        },
        delivery_date: {
          type: "string",
          required: true,
        },
        needy_people_organization:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"NeedyPeople"
        },
        location: {
            type: "string",
            required: true,
          },
        status: {
          type: "string",
          required: true,
          },
      }, {timestamps: true})
      
    
    const FoodDelivery = mongoose.model('FoodDelivery',deliverySchema) 
    module.exports = FoodDelivery
    
