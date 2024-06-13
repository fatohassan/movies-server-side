const { createUser } = require("../controllers/userController")

const express = require('express')
const router = express.Router()

router.route('/user/create').post(createUser)

module.exports = router;