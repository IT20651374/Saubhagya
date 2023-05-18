const express = require('express')
const router = express.Router()


const ContactController = require('../controllers/ContactController')


router.get('/', ContactController.index)
router.post('/show/:id', ContactController.getById)
router.post('/store', ContactController.store)

module.exports = router