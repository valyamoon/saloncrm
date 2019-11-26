'use strict';
const mongoose = require('mongoose');
const storesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: ''
    },
    address: {
        type: String,
        required: false,
        default: ''
    },
    phone_no: {
        type: String,
        required: false,
        default: ''
    },
    email: {
        type: String,
        required: false,
        default: ''
    },
    imei_no: {
        type: String,
        required: false,
        default: ''
    },
},{
    timestamps: true
});

module.exports = mongoose.model('stores', storesSchema);
