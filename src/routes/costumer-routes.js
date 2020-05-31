const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerControler');


router.post('/costumers', controller.post);

module.exports = router;