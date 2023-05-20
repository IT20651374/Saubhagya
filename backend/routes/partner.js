const express = require('express')
const router = express.Router()

const PartnerController = require("../controllers/PartnerController");

router.get('/',PartnerController.index)
router.get("/:id" , PartnerController.getById)
router.get('/show/:id', PartnerController.getById)
router.post('/store', PartnerController.store)
router.put('/update/:id',PartnerController.update)
router.delete('/delete/:id', PartnerController.destroy)



module.exports = router