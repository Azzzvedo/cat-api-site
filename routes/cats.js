const express = require("express")

const router = express.Router()

const catsController = require("../controllers/cats")

router.get('/breeds', catsController.getBreeds)
router.get('/', catsController.getIndex)

module.exports = router
