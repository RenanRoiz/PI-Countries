const express = require('express')
const controllers = require('../controllers/country_controllers.js')
const router = express.Router()

const { getCountries, getOneCountry } = controllers;

router.get('/', getCountries)
router.get('/:countryId', getOneCountry)

module.exports = router;