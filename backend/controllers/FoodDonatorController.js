const DonateFood = require('../models/DonateFood');
const NeedyPeople = require('../models/NeedyPeople');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// show the list of food donations
const index = (req, res, next) => {
  DonateFood.find()
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

// show single food donation
const show = (req, res, next) => {
  let foodDonatorID = req.body.foodDonatorID;
  DonateFood.findById(foodDonatorID)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

// create new food donation
const store = (req, res, next) => {
  let foodDonator = new DonateFood({
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
    needyPeopleID: new ObjectId(req.body.needyPeopleID)

  });

  foodDonator
    .save()
    .then(response => {
      res.json({ message: 'Food Donated Successfully!' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred: ' + error });
    });
};

const getById = async (req, res) => {
  try {
    let foodDonator = await DonateFood.findById(req.params.id);
    if (foodDonator) {
      res.status(200).json({ foodDonator });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred: ' + error });
  }
};

// update a FoodDonator
const update = (req, res, next) => {
  let foodDonatorID = req.body.foodDonatorID;

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
    needyPeopleID: new ObjectId(req.body.needyPeopleID)

  };

  DonateFood.findByIdAndUpdate(foodDonatorID, { $set: updatedData })
    .then(() => {
      res.json({ message: 'Food Donation updated successfully!' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

// delete a FoodDonator
const destroy = (req, res, next) => {
  let foodDonatorID = req.body.foodDonatorID;
  DonateFood.findByIdAndRemove(foodDonatorID)
    .then(() => {
      res.json({ message: 'Food Donation deleted successfully!' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

module.exports = {
    index , show , store , update , destroy , getById
  }
      
      

      


