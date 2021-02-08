const express = require('express')
const router = express.Router()
const { verifyToken } = require('./middleware/verifyToken')
const { normalAPI } = require('../controller/normal')

// jwt가 있어야 접근가능 한 api
router.post('', verifyToken, normalAPI)

module.exports = router