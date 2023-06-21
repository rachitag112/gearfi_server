const express = require("express");
const router = express.Router();
const nfts = require('./models/nft');
const path = require("path");

router.get("/assets", async (req,res) => {
    const projection = {contractAddress: 1, owner: 1, price: 1, state: 1}
    const allAssets = nfts.find(projection);
    for await (const nft of allAssets) {
        res.send(nft)
    }
})

router.get("/assets/:collectionAddress", async (req, res) => {
    const collectionAddress = req.body.collectionAddress;
    const collection = nfts.find({ contractAdress: collectionAddress, "state.listed": true });

    for await (const nft of collection) {
        res.send(nft)
    }
})

router.get("/assets/:collectionAddress/:nftId", async (req, res) => {
    const collectionAddress = req.params.collectionAddress;
    const nftId = req.params.nftId;
    const nft = await nfts.find( { contractAddress: collectionAddress, tokenId: nftId } );

    res.send(nft);
})

module.exports = router;