const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const UserSchema = require("../models/User")

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)




module.exports = router