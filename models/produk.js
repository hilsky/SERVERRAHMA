const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    nama_paket: {
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    tipe_paket: {
        type: String,
        required: true
    },
    jml_kouta: {
        type: String,
        required: true
    },
    masa_aktif: {
        type: String,
        required: true
    },
})

exports.Produk = new mongoose.model('Produk', produkSchema);