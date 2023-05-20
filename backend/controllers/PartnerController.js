const Partner = require('../models/Partner');
const DonateFood = require('../models/DonateFood');
const { ObjectId } = require('mongoose').Types;

//get list of donations
const index = (req, res, next) => {
    Partner.find()
    .populate('foodDonator')
    .then((response) => {
        res.json({response});
    })
    .catch((error) => {
        res.status(500).json({ message: 'error' + error});
    });
};

// get a single partner
const show = (req, res, next) => {
    const partnerID = req.params.id;
  
    Partner.findById(partnerID)
      .then((response) => {
        if (response) {
          res.json({ response });
        } else {
          res.status(404).json({ message: 'partner not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'An error occurred: ' + error });
      });
};

// Create a new partner
const store = (req, res, next) => {
    const { foodDonator, ...partnerData } = req.body;
  
    DonateFood.findOne({ _id: foodDonator })
      .then((donator) => {
        if (!donator) {
          return res.status(404).json({ message: 'donator not found' });
        }
  
        const partner = new Partner({
          ...partnerData,
          foodDonator,
        });
  
        partner
          .save()
          .then((response) => {
            res.json({ message: 'partner created Successfully!', partner: response });
          })
          .catch((error) => {
            res.status(500).json({ message: 'An error occurred: ' + error });
          });
      })
      .catch((error) => {
        res.status(500).json({ message: 'An error occurred: ' + error });
      });
};

// Update a partner
const update = (req, res, next) => {
    const partnerID = req.params.id;
  
    Partner.findByIdAndUpdate(partnerID, {...req.body}, { new: true })
      .then((updatedPartner) => {
        if (updatedPartner) {
          res.json({
            message: 'partner Updated Successfully!',
            partner: updatedPartner,
          });
        } else {
          res.status(404).json({ message: 'partner not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'An error occurred: ' + error });
      });
};

// Delete a partner
const destroy = (req, res, next) => {
    const partnerID = req.params.id;
  
    Partner.findByIdAndRemove(partnerID)
      .then(() => {
        res.json({
          message: 'partner deleted successfully!',
        });
      })
      .catch((error) => {
        res.status(500).json({ message: 'An error occurred: ' + error });
      });
};

const getById = async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (partner) {
        res.status(200).json({ partner });
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