const express = require('express')
const router = express.Router()

const FoodDonatorController   = require("../controller/FoodDonatorController")

router.get('/',FoodDonatorController.index)
router.post('/show',FoodDonatorController.show)
router.post('/store',FoodDonatorController.store)
router.post('/update',FoodDonatorController.update)
router.post('/delete',FoodDonatorController.delete)



module.exports = router;