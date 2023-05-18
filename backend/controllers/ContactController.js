const Contact = require('../models/Contact')

//show the list of inquireries
const index = (req, res, next) => {
    Contact.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
  }

  // Add new message/ inquiry
    const store = (req, res, next) =>{

    let contact = new Contact({
      fullName: req.body.fullName,
      email: req.body.email,
      message: req.body.message
    })
  
    contact.save()
    .then(response => {
      res.json({
        message: 'Message sent successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!' + error
      })
    })
  }
  
  const getById=async(req,res)=>{
    let contact = await Contact.find({_id:req.params.id})
    if(contact){
      res.status(200).json({contact})
    }else{
      res.status(404).jsno({message:"Not found"})
    }
  }

  module.exports = {
    index , store, getById
  }