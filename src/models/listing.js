const mongoose = require('mongoose');
const db = require('../db');

const schema = new mongoose.Schema({
    nftId:{
        type:Number
    },
    nftAddress:{
        type:Number
    },
    sellerAddress:{
        type:Number
    },
    metadata:{
        type:JSON
    },
    price:{
        type:Number
    },
});

const listing = mongoose.model('listing', schema);

module.exports = listing;