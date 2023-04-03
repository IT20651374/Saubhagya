const express = require('express')
const router = express.Router()

const NeedyPeopleController = require('../controllers/NeedyPeopleController')

router.get('/', NeedyPeopleController.index)
router.post('/show', NeedyPeopleController.show)
router.post('/store', NeedyPeopleController.store)
router.post('/update', NeedyPeopleController.update)
router.post('/delete', NeedyPeopleController.destroy)

module.exports = router