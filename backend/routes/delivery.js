const express = require('express')
const router = express.Router()


const FoodDeliveryController   = require("../controllers/FoodDeliveryController")


router.get('/',FoodDeliveryController.index)
router.get("/:id" , FoodDeliveryController.getById)
router.post('/show/:id', FoodDeliveryController.getById)
router.post('/store', FoodDeliveryController.store)
router.post('/update/:id',FoodDeliveryController.update)
router.post('/delete/:id', FoodDeliveryController.destroy)



module.exports = router
