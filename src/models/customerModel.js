'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({

    name: {
        type: String,
        required: true,

    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    estado: {
        type: String

    }
})


module.exports = mongoose.model('Customer', schema);