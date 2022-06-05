const express = require('express');
const res = require('express/lib/response');
const route = express.Router();
const mongoose = require('mongoose');
const { Produk } = require('../models/produk');

route.get('/', (req, res) => {
    Produk.find()
        .then(produk =>{
            res.send(produk);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

route.post('/', (req, res) => {
    const produk = new Produk({
        nama_paket: req.body.nama_paket,
        harga: req.body.harga,
        tipe_paket: req.body.tipe_paket,
        jml_kouta: req.body.jml_kouta,
        masa_aktif: req.body.masa_aktif
    });
    produk.save()
        .then(produk => {
            res.send(produk);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

route.get('/:id', (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).send({
                message: 'Invalid ID'
            });
        }
        Produk.findById(req.params.id)
            .then(produk => {
                if(!produk) {
                    res.status(404).send({
                        message: 'Produk not found'
                    });
                }
                res.send(produk);
            })
            .catch(err => {
                res.status(400).send(err);
            }
        );
    } catch (error) {
        res.status(400).send(error);

    }
});

route.delete('/:id', (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).send({
                message: 'Invalid ID'
            });
        }
        Produk.findByIdAndRemove(req.params.id)
            .then(produk => {
                if(!produk) {
                    res.status(404).send({
                        message: 'Produk not found'
                    });
                }
                res.send(produk);
            })
            .catch(err => {
                res.status(400).send(err);
            }
        );
    } catch (error) {
        res.status(400).send(error);

    }
});

route.put('/:id', (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).send({
                message: 'Invalid ID'
            });
        }
        Produk.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(produk => {
                if(!produk) {
                    res.status(404).send({
                        message: 'Produk not found'
                    });
                }
                res.send(produk);
            })
            .catch(err => {
                res.status(400).send(err);
            }
        );
    } catch (error) {
        res.status(400).send(error);

    }
});

module.exports = route;