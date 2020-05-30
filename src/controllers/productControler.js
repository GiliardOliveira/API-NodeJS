'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.get = (req, res, next) => {
    Product.find({
            active: true
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.getBySlug = (req, res, next) => {
    Product.findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.getByID = (req, res, next) => {
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.getByTag = (req, res, next) => {
    Product.find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body); //ou product();
    //product.title = req.body.title;
    product.save()
        .then(x => {
            res.status(201).send({
                message: "sucess"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Failed",
                data: e
            });
        });



};

exports.put = (req, res, next) => {

    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                slug: req.body.slug,
                price: req.body.price,
                tags: req.body.tags
            }
        }).then(x => {
            res.status(200).send({
                message: "sucess"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Failed",
                data: e
            });
        });

};


exports.delete = (req, res, next) => {

    Product
        .findByIdAndRemove(req.params.id)//posso escolher apagar por id ou body(req.body.id)
        .then(x => {
            res.status(200).send({
                message: "sucess"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Failed",
                data: e
            });
        });
};