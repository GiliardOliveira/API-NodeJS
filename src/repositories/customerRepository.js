'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.create = async (body) => {
    var customer = new Customer(body);
    await customer.save();
}