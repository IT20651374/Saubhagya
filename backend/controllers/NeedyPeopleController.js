const NeedyPeople = require('../models/NeedyPeople')

//show the list of needy people
const index = (req, res, next) => {
  NeedyPeople.find()
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

//show single needy people organization
const show = (req, res, next) => {
  let needyPeopleID = req.body.needyPeopleID
  NeedyPeople.findById(needyPeopleID)
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

// Add new needy people organization
const store = (req, res, next) =>{

  let needyPeople = new NeedyPeople({
    organization_name: req.body.organization_name,
    address: req.body.address,
    contact_no: req.body.contact_no,
    email: req.body.email,
    no_of_children: req.body.no_of_children,
    no_of_adults: req.body.no_of_adults,
    meals: req.body.meals,
    food_preferences: req.body.food_preferences,
    other_required_nececities: req.body.other_required_nececities
  })
  if(req.file){
    needyPeople.logo = req.file.originalname;
  }

  needyPeople.save()
  .then(response => {
    res.json({
      message: 'Organization added successfully!'
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!' + error
    })
  })
}


const getById=async(req,res)=>{
  let needyPeople = await NeedyPeople.find({_id:req.params.id})
  if(needyPeople){
    res.status(200).json({needyPeople})
  }else{
    res.status(404).jsno({message:"Not found"})
  }
}

//Update needy people organization
const update = (req, res, next) => {
  let needyPeopleID = req.params.id

  // Find the existing organization data first
  NeedyPeople.findById(needyPeopleID)
    .then((needyPeople) => {
      // Merge the updated data with the existing data
      const mergedData = { ...needyPeople.toObject(), ...req.body };

      // Filter out properties that haven't been updated
      const updatedData = Object.fromEntries(
        Object.entries(mergedData)
          .filter(([key, value]) => {
            return value !== undefined && value !== null && value !== needyPeople[key];
          })
      );

      // If a logo file is uploaded, add the filename to the updated data
      if (req.file) {
        updatedData.logo = req.file.originalname;
      }

      // Update the organization with the merged data
      return NeedyPeople.findByIdAndUpdate(needyPeopleID, { $set: updatedData }, { new: true });
    })
    .then((updatedNeedyPeople) => {
      res.json({
        message: 'Organization details updated successfully!',
        needyPeople: updatedNeedyPeople
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occurred!'
      })
    })
}

//Delete needy people organization details
const destroy = (req, res, next) => {
  let needyPeopleID = req.params.id;
  NeedyPeople.findByIdAndRemove(needyPeopleID)
  .then(() => {
    res.json({
      message: 'Organization deleted successfully'
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured!'
    })
  })
}

module.exports = {
  index , show, store, update, destroy , getById
}
