const express = require('express')
const router = express.Router()
const multer = require("multer")

const NeedyPeopleController = require('../controllers/NeedyPeopleController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/', NeedyPeopleController.index)
router.post('/show', NeedyPeopleController.show)
router.post('/store', upload.single('logo'), NeedyPeopleController.store)
router.post('/update', NeedyPeopleController.update)
router.post('/delete', NeedyPeopleController.destroy)

module.exports = router