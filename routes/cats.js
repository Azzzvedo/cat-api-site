const express = require("express")

const router = express.Router()

const catsController = require("../controllers/cats")

router.get("/", catsController.getIndex)

module.exports = router
