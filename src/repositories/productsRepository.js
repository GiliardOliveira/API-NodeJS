'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');



exports.get = async () => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.getByID = async (id) => {
    const res = await Product.findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
    }, 'title description price slug tags')
    return res
}

exports.create = async (body) => {
    var product = new Product(body);
    await product.save();
}

exports.update = async (id, body) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: body.title,
                description: body.description,
                slug: body.slug,
                price: body.price,
                tags: body.tags
            }
        })
}

exports.delete = async (id) => {
    await Product.findByIdAndDelete(id)
}