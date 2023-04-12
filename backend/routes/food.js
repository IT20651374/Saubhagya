var express = require('express');
var router = express.Router();
const foodController = require("../controllers/food")


router.post("/add" , foodController.addNewFood ); // http:localhost:3000/food/update/12123

router.post("/update/:id" , foodController.updateFood );

module.exports = router;