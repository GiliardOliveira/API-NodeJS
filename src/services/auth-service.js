'use strict';

const jwt = require('jsonwebtoken')

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, {
        expiresIn: '1d'
    });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY)
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token|| req.query.token || req.headers['x-access-token'];
}