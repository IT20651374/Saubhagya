var express = require('express');
var router = express.Router();
const donnationPartnerController = require("../controllers/donnation-partner")


router.post("/add" , donnationPartnerController.addNewDonnationPartner ); // http:localhost:3000/food/update/12123

router.get("/get" , donnationPartnerController.getAllDonnationPartner);

router.put("/update/:id" , donnationPartnerController.updateDonnationPartner );

router.put("/delete/:id" , donnationPartnerController.deleteDonnationPartner );

module.exports = router;