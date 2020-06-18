const repository = require('../repositories/customerRepository')
const md5 = require('md5')


exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            estado: req.body.estado,
            cidade: req.body.cidade,
            password: md5(req.body.password)
        })
        res.status(201).send({
            message: "sucess"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
};