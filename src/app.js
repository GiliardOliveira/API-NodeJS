'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config')

const app = express();
const router = express.Router();

//conexao com banco

mongoose.connect(config.connectionString, {
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
const costumerRoutes = require('./routes/customer-routes');
const orderRoutes = require('./routes/order-routes');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});



app.use('/', indexRoutes);
app.use('/', productsRoutes);
app.use('/', costumerRoutes);
app.use('/', orderRoutes);

module.exports = app;