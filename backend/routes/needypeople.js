const express = require('express')
const router = express.Router()

const NeedyPeopleController = require('../controllers/NeedyPeopleController')
const upload                = require('../middleware/upload')

router.get('/', NeedyPeopleController.index)
router.post('/show', NeedyPeopleController.show)
router.post('/store', upload.single('logo'), NeedyPeopleController.store)
router.post('/update', NeedyPeopleController.update)
router.post('/delete', NeedyPeopleController.destroy)

module.exports = router