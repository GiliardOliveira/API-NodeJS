'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControler');


router.post('/products', controller.post);
 
router.put('/products/:id', controller.put);

router.delete('/products/:id', controller.delete);

router.get('/products/', controller.get);

router.get('/products/:slug', controller.getBySlug);

router.get('/products/admin/:id', controller.getByID);

router.get('/products/tags/:tag', controller.getByTag);



module.exports = router;