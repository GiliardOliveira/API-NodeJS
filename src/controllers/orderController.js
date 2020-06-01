const repository = require('../repositories/orderRepository')
const guid = require('guid')

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