const DonateFood = require('../models/DonateFood');
const NeedyPeople = require('../models/NeedyPeople');
const { ObjectId } = require('mongoose').Types;

// Show the list of food donations
const index = (req, res, next) => {
  DonateFood.find()
    .populate('needy_people_organization')
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Show a single food donation
const show = (req, res, next) => {
  const foodDonatorID = req.params.id;

  DonateFood.findById(foodDonatorID)
    .then((response) => {
      if (response) {
        res.json({ response });
      } else {
        res.status(404).json({ message: 'Food donation not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Create a new food donation
const store = (req, res, next) => {
  const { needy_people_organization, ...donateFoodData } = req.body;

  NeedyPeople.findOne({ _id: needy_people_organization })
    .then((needyPerson) => {
      if (!needyPerson) {
        return res.status(404).json({ message: 'Needy person not found' });
      }

      const donateFood = new DonateFood({
        ...donateFoodData,
        needy_people_organization,
      });

      donateFood
        .save()
        .then((response) => {
          res.json({ message: 'Food Donated Successfully!', foodDonator: response });
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
  const foodDonatorID = req.params.id;
  const { needy_people_organization, ...updatedData } = req.body;

  DonateFood.findByIdAndUpdate(foodDonatorID, updatedData, { new: true })
    .then((updatedDonateFood) => {
      if (updatedDonateFood) {
        res.json({
          message: 'Food Donation Updated Successfully!',
          foodDonator: updatedDonateFood,
        });
      } else {
        res.status(404).json({ message: 'Food donation not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

// Delete a Food donation
const destroy = (req, res, next) => {
  const foodDonatorID = req.params.id;

  DonateFood.findByIdAndRemove(foodDonatorID)
    .then(() => {
      res.json({
        message: 'Food Donation deleted successfully!',
      });
    })
    .catch((error) => {
      res.status(500).json({ message: 'An error occurred: ' + error });
    });
};

const getById = async (req, res) => {
  try {
    const foodDonator = await DonateFood.findById(req.params.id);
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
  index,
  show,
  store,
  update,
  destroy,
  getById,
};
