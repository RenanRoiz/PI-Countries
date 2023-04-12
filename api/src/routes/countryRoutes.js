const { Router } = require('express');

const countriesRouter = Router();
const {getAllCountriesHandler, getCountryById} = require('../handlers/countriesHandler')

countriesRouter.get('/', getAllCountriesHandler)

countriesRouter.get('/:id', getCountryById)

// countriesRouter.get('/countries/name?', getAllCountriesHandler)   

module.exports = countriesRouter; 
