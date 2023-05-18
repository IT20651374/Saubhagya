const FoodDelivery = require('../models/FoodDelivery');
const NeedyPeople = require('../models/NeedyPeople');
const { ObjectId } = require('mongoose').Types;

// Show the list of food deliveries
const index = (req, res, next) => {
  FoodDelivery.find()
    .populate('needy_people_organization')
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Show a single food delivery
const show = (req, res, next) => {
  const foodDeliveryID = req.params.id;

  FoodDelivery.findById(foodDeliveryID)
    .then((response) => {
      if (response) {
        res.json({ response });
      } else {
        res.status(404).json({ message: 'Food delivery not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Create a new food donation
const store = (req, res, next) => {
  const { needy_people_organization, ...deliverFoodData } = req.body;

  NeedyPeople.findOne({ _id: needy_people_organization })
    .then((needyPerson) => {
      if (!needyPerson) {
        return res.status(404).json({ message: 'Needy person not found' });
      }

      const deliverFood = new FoodDelivery({
        ...deliverFoodData,
        needy_people_organization,
      });

      deliverFood
        .save()
        .then((response) => {
          res.json({ message: 'Food Delivery Added Successfully!', foodDeliver: response });
        })
        .catch((error) => {
          res.status(500).json({ message: 'An error occurred: ' + error });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Update a Food donation
const update = (req, res, next) => {
  const foodDeliveryID = req.params.id;

  FoodDelivery.findByIdAndUpdate(foodDeliveryID, {...req.body}, { new: true })
    .then((updatedDeliveryFood) => {
      if (updatedDeliveryFood) {
        res.json({
          message: 'Food Delivery Updated Successfully!',
          foodDeliver: updatedDeliveryFood,
        });
      } else {
        res.status(404).json({ message: 'Food delivery not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Delete a Food donation
const destroy = (req, res, next) => {
  const foodDeliveryID = req.params.id;

  FoodDelivery.findByIdAndRemove(foodDeliveryID)
    .then(() => {
      res.json({
        message: 'Food Delivery Deleted Successfully!',
      });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

const getById = async (req, res) => {
  try {
    const foodDeliver = await FoodDelivery.findById(req.params.id);
    if (foodDeliver) {
      res.status(200).json({ foodDeliver });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred: ' + error });
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  getById,
};
