'use strict'

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "1.0.0"
    });

});


module.exports = router;