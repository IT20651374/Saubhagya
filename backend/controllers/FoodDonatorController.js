const FoodDonate = require('../models/fooddonate')


// show the list of food donations

const index = (req, res, next) => {
      fooddonate.find()
      .then(response => {
         res.json({
           response
         })
      })
      .catch(error => {
        res.json({
          message: 'An error Occured!'
        })
      })
    }

    const show = (req, res, next) => {
      let foodDonatorID = req.body.foodDonatorID
      fooddonate.findById(foodDonatorID)
      .then(response => {
        res.json({
          response
        
      })

    })
    .catch(error => {
      res.json({
        message: 'An error Occured'
         })
       })
    }

    //create food donator
    const store =(req,res,next) => {
      let foodDonator = new fooddonate({
        name: req.body.name,
        organizationname: req.body.organizationname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        mealtype: req.body.mealtype,
        foodname: req.body.foodname,
        quantity: req.body.quantity,
        additionaldonateitems: req.body.additionaldonateitems,
        pickupdate: req.body.pickupdate,
        needyPeopleID: mongoose.Types.ObjectId(req.body.needyPeopleID)
    

      })
      foodDonator.save()
      .then(response => {
        res.json({
          message: 'Food Donated Sccessfully!' 
        })
      })
      .catch(error => {
      res.json({
        message: 'An error Occured!' + error
      })
    })

  }

  const getById=async(req,res)=>{
    let foodDonator = await fooddonate.find({_id:req.params.id})
    if(foodDonator){
      res.status(200).json({foodDonator})
    }else{
      res.status(404).jsno({message:"Not found"})
    }
  }

      //update an FodDoator
      const update = (req,res, next) => {
        let foodDonatorID = req.body.foodDonatorID

        let updatedData = {
        name: req.body.name,
        organizationname: req.body.organizationname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        mealtype: req.body.mealtype,
        foodname: req.body.foodname,
        quantity: req.body.quantity,
        additionaldonateitems: req.body.additionaldonateitems,
        pickupdate: req.body.pickupdate,
        needyPeopleID: mongoose.Types.ObjectId(req.body.needyPeopleID)

        }
        fooddonate.findByIdAndUpdate(foodDonatorID, {$set: updatedData})
        .then(() => {
          res.json({
            message: ' Food Donation updated successfully!'
          })   
    })
    .catch(error => {
      res.json({
        message: 'An error Occured!'

      })
    })
  }

  //delete an FoodDonator
  const destroy = (req,res,next)=> {
    let foodDonatorID = req.body.foodDonatorID
    fooddonate.findOneAndRemove(foodDonatorID)
    .then(() => {
      req.json({
        message: ' An error Occured!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
  }

  module.exports = {
    index , show , store , update , destroy , getById
  }
      
      

      


