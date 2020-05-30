'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControler');



/**
 * @swagger
 * /products:
 * post:
 *   description: Use to request All
 *   responses: 200
 *    description: sucess
 */
router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

router.get('/', controller.get);

router.get('/:slug', controller.getBySlug);

router.get('/admin/:id', controller.getByID);

router.get('/tags/:tag', controller.getByTag);



module.exports = router;