const food = require('../models/DonateFood')

// show the list of FoodDonator

const index = (req,res,next) => {
      FoodDonator.find()
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
      let FoodDonatorID = req,body,FoodDonatorID
      FoodDonator.findById(FoodDonatorID)
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
    const store =(req,res,next) => {
      let FoodDonator = new FoodDonator({
        name: req.body.name,
        organizationname: req.body.organizationname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.phone,
        foodName: req.body.foodname,
        quantity: req.body.quantity,
        pickupdate: req.body.pickupdate,
        image: req.body.image,

      })
      FoodDonator.save()
      .then(response => {
        res.json({
          message: 'FoodDonator Added Sccessfully' 
        })
      })
      .catch(error => {
      res.json({
        message: 'An error Occured!'
      })
    })

  }
      //update an FodDoator
      const update = (req,res, next) => {
        let FoodDonatorID = req.body.FoodDonatorID

        let updatedDate = {
          name: req.body.name,
          organizationname: req.body.organizationname,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.phone,
          foodName: req.body.foodname,
          quantity: req.body.quantity,
          pickupdate: req.body.pickupdate,
          image: req.body.image,

        }
        FoodDonator.findByIdAndUpdate(FoodDonatorID, {$set: updatedDate})
        .then(() => {
          res.json({
            message: ' FoodDonator updated successfully!'
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
    let FoodDonatorID = req.body.FoodDonatorID
    FoodDonator.findOneAndRemove(FoodDonatorID)
    .then(() => {
      req.json({
        message: ' An error Occured!'
      })
    })
  }

  module.exports = {
    index,show,store,update
  }
      
      

      


