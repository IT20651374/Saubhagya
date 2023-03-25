const DonnationPartner = require('../models/donnation-partner');

exports.addNewDonnationPartner = (req, res) => {
  const newDonnationPartner = new DonnationPartner(req.body);
  newDonnationPartner.save((err, donnationPartner) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to add new donnation partner"
      });
    }
    res.json({ donnationPartner });
  });
};

exports.getAllDonnationPartner = (req, res) => {
  DonnationPartner.find().exec((err, donnationPartners) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to retrieve donnation partners"
      });
    }
    res.json({ donnationPartners });
  });
};

exports.updateDonnationPartner = (req, res) => {
  DonnationPartner.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, donnationPartner) => {
      if (err) {
        return res.status(400).json({
          error: "Unable to update donnation partner"
        });
      }
      res.json({ donnationPartner });
    }
  );
};

exports.deleteDonnationPartner = (req, res) => {
  DonnationPartner.findByIdAndDelete({ _id: req.params.id }, (err, donnationPartner) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to delete donnation partner"
      });
    }
    res.json({ message: "Donnation partner deleted successfully" });
  });
};
