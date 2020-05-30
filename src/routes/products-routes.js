'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControler');
const app = require('../app.js')


const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Api Node Js',
            description: "Api Nodejs + MongoDB + Travis CI + Heroku",
            contact: {
                name: "github.com/GiliardOliveira"
            },
            servers: ['https://api-products-nodejs.herokuapp.com/']
        }
    },
    apis: ['./routes/productsRoutes.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

router.get('/', controller.get);

router.get('/:slug', controller.getBySlug);

router.get('/admin/:id', controller.getByID);

router.get('/tags/:tag', controller.getByTag);



module.exports = router;