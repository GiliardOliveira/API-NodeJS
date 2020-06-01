'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');


exports.create = async (body) => {
    var order = new Order(body);
    await order.save();
}

exports.get = async (body) => {
    var res = await Order.find({},'status number itens price')
    .populate('customer','name')
    .populate('itens.product','title');
    return res;
}