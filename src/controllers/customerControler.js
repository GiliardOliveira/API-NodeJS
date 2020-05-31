const repository = require('../repositories/customerRepository')



exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({
            message: "sucess"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
};