'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();



//conexao com banco

mongoose.connect('mongodb+srv://giliard:drailig@cluster0-krgxt.azure.mongodb.net/test?retryWrites=true&w=majority');

//models
const Product = require('./models/productModel')

//carrega as rotas
const indexRoutes = require('./routes/index-routes');
const productsRoutes = require('./routes/products-routes');

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

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





app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,x-access-token');
    res.header('Access-Control-Allow-Headers', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});



app.use('/', indexRoutes);
app.use('/products', productsRoutes);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

module.exports = app;
