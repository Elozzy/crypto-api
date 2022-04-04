const { walletgenAddress } = require("../../controller/WalletController");

const router = require("express").Router();


router.post("/gen_address", walletgenAddress)
module.exports = router;