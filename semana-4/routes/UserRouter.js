const express = require('express')
const { listUsers, newUser } = require('../controllers/UserController.js')

const router = express.Router();

router.get('/', listUsers)
router.post('/', newUser)
