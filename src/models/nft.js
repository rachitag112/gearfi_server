const mongoose = require('mongoose');
const db = require('../db');

const schema = new mongoose.Schema({
    tokenId:{
        type:Number
    },
    contractAddress:{
        type:Number
    },
    metadata:{
        type:JSON
    },
    owner:{
        type:String
    },
    chain:{
        type:String
    },
    price:{
        type:Number
    },
    state:{
        type:String
    },
    // category:{
    //     type:String
    // }
});

const nft = mongoose.model('nfts', schema);

module.exports = nft;