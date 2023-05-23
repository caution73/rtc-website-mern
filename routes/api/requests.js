const express = require("express")
const router = express.Router()
const requestsCtrl = require("../../controllers/api/requests")
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post("/pages/requests", ensureLoggedIn, requestsCtrl.create)

module.exports = router