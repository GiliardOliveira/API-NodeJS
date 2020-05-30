'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true

    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    slug: {
        type: String,
        required: [true, 'Obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    tags: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Product', schema);