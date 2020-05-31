'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/productsRepository')

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

exports.getBySlug = async (req, res, next) => {
    try {
        const data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
}

exports.getByID = async (req, res, next) => {
    try {
        const data = await repository.getByID(req.params.id);
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha"
        })
    }
}

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

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: "sucess"
        })
    } catch (e) {
        res.status(400).send({
            message: "Falha"
        })
    }

};


exports.delete = async (req, res, next) => {
    //posso escolher apagar por id ou body(req.body.id)
    try {
        await repository.delete(req.params.id)
        res.status(200).send({
            message: "sucess"
        })
    } catch (error) {
        res.status(500).send({
            message: "falha"
        })

    }
}