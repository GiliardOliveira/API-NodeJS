const repository = require('../repositories/orderRepository')
const guid = require('guid')
const mongoose = require('mongoose')
const Order = mongoose.model('Order')

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            itens: req.body.itens
        });
        res.status(201).send({
            message: "sucess"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
};


exports.get = async (req, res, next) => {
    try {
        const data = await repository.get()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
}


exports.getByCPF = (req, res, next) => {
    Order.find({
        cpf: req.params.cpf
    }).
    then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send({
            message: 'failed'
        })
    })
}