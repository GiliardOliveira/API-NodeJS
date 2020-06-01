const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerControler');


router.post('/customers', controller.post);

module.exports = router;