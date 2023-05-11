const express = require('express')
const router = express.Router()


const FoodDonatorController   = require("../controllers/FoodDonatorController")


router.get('/',FoodDonatorController.index)
router.get("/:id" , FoodDonatorController.getById)
router.post('/show/:id', FoodDonatorController.getById)
router.post('/store', FoodDonatorController.store)
router.post('/update/:id',FoodDonatorController.update)
router.post('/delete/:id', FoodDonatorController.destroy)



module.exports = router