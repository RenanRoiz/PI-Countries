const express = require('express')
const controllers = require('../controllers/activity_controllers')
const router = express.Router()

const { createActivity, traerActividades,} = controllers;

router.route('/')
  .get(traerActividades)
  .post(createActivity)

module.exports = router;