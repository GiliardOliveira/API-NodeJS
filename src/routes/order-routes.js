const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');


router.post('/orders', controller.post);
router.get('/orders', controller.get);
router.get('/orders/:cpf', controller.getByCPF);

module.exports = router;