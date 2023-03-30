const { Router } = require('express');
const controllersCountries = require("../controllers/country_controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const {getCountries, getOneCountry} = controllersCountries;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/",getCountries);
router.get("/:countryId",getOneCountry)


module.exports = router;
