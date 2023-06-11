const express = require("express");
const router = express.Router();
const listing = require('./models/listing');
const offer = require('./models/offer');
const transfer = require('./models/transfer');
const path = require('path');

router.get('/', (req, res) => {
  res.send("GearFi Rocks!");
});

//Getting the listing
router.get('/getListing', async (req,res) => {
  const nftList = await listing.find();
  res.send(nftList);
});

//Getting the NFT from listing
router.get('/getListing/:nftId', async (req,res) => {
  const { nftId } = req.params;
  const nft = await listing.findOne({ nftId : nftId});
  
  if(!nft) return res.send('NFT not found');
  res.send(nft);
})

// Adding to Listing
router.post('/addListing', async (req, res) => {
  const nftId = req.params.nftId;
  const nftAddress = req.params.nftAddress;
  const sellerAddress = req.params.sellerAddress;
  const metadata = req.params.metadata;
  const price = req.params.price;

  const nftExist = await listing.findOne({nftId : nftId});
  if (nftExist) return res.send('NFT exists');

  let data = await listing.create({nftId, nftAddress, sellerAddress, metadata, price});
  data.save();
  res.send('NFT added to listing');
});

//Removing NFT from Listing
router.delete('/deleteListing/:nftId', async (req,res) => {
  const { nftId } = req.params;
  const nftExist = await listing.findOne({nftId : nftId});

  if(!nftExist) return res.send('NFT do not exist');
  await listing.deleteOne({ nftId : nftId}).then(() => {
    res.send('NFT removed successfully')
  }).catch((error) => {
    console.log(error);
  });
});

module.exports = router;