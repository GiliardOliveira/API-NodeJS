'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao com banco

mongoose.connect('mongodb+srv://giliard:drailig@cluster0-krgxt.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//models
const Product = require('./models/productModel')
const Customer = require('./models/customerModel')
const Order = require('./models/orderModel')

//carrega as rotas
const indexRoutes = require('./routes/index-routes');
const productsRoutes = require('./routes/products-routes');
const costumerRoutes = require('./routes/costumer-routes');

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
app.use('/', productsRoutes);
app.use('/', costumerRoutes);

module.exports = app;