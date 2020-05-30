'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


//conexao com banco

mongoose.connect('mongodb+srv://giliard:drailig@cluster0-krgxt.azure.mongodb.net/test?retryWrites=true&w=majority');

//models
const Product = require('./models/product')

//carrega as rotas
const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products-routes');



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

module.exports = app;