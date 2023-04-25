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
router.get("/:id" , NeedyPeopleController.getById)
router.post('/show/:id', NeedyPeopleController.getById)
router.post('/store', upload.single('logo'), NeedyPeopleController.store)
router.post('/update/:id', upload.single('logo'), NeedyPeopleController.update)
router.post('/delete/:id', NeedyPeopleController.destroy)

module.exports = router