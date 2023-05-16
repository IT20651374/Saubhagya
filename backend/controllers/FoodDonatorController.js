const DonateFood = require('../models/DonateFood');
const NeedyPeople = require('../models/NeedyPeople');
const { ObjectId } = require('mongoose').Types;

// Show the list of food donations
const index = (req, res, next) => {
  DonateFood.find().populate("needy_people_organization")
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

// Show a single food donation
const show = (req, res, next) => {
  let foodDonatorID = req.params.id; // Assuming the foodDonatorID is passed as a URL parameter
  DonateFood.findById(foodDonatorID)
    .then(response => {
      if (response) {
        res.json({ response });
      } else {
        res.status(404).json({ message: 'Food donation not found' });
      }
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

// Create a new food donation
const store = (req, res, next) => {
  // Find the NeedyPeople document based on the organization name
  NeedyPeople.findOne({ _id: req.body.needy_people_organization })
    .then(needyPerson => {

      console.log(needyPerson)
      if (!needyPerson) {
        return res.status(404).json({ message: 'Needy person not found' });
      }

      // Create a new DonateFood document with the foreign key reference
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
        needy_people_organization: req.body.needy_people_organization
      });

      // Save the new food donation
      foodDonator
        .save()
        .then(response => {
          res.json({ message: 'Food Donated Successfully!', foodDonator: response });
        })
        .catch(error => {
          res.json({ message: 'An error occurred: ' + error });
        });
    })
    .catch(error => {
      res.json({ message: 'An error occurred: ' + error });
    });
};

// Update a Food donation
const update = (req, res, next) => {
  const foodDonatorID = req.params.id;

  const updatedData = {
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
    needy_people_organization: req.body.needy_people_organization
  };

  DonateFood.findByIdAndUpdate(foodDonatorID, updatedData, { new: true })
    .then(updatedDonateFood => {
      if (updatedDonateFood) {
        res.json({
          message: 'Food Donation Updated Successfully!',
          foodDonator: updatedDonateFood
        });
      } else {
        res.status(404).json({ message: 'Food donation not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Delete a Food donation
const destroy = (req, res, next) => {
  let foodDonatorID = req.params.id;

  DonateFood.findByIdAndRemove(foodDonatorID)
    .then(() => {
      res.json({ 
        message: 'Food Donation deleted successfully!'
      });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
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



module.exports = {
    index , show , store , update , destroy , getById
  }
      
      

      


