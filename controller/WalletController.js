const catchAsyncError = require("../middleware/catchAsyncError");
const {Wallet} = require('../services');
const { uuid } = require("uuidv4");
const { walletAddressValidation } = require("../validation/WalletValidation");
const {
    randomString,
  } = require("../utils/helper");

exports.walletgenAddress = catchAsyncError(async(req, res, next) => {
    //
  
    const validatedData = await walletAddressValidation(req.body);
    console.log(req.body)
    console.log(">>>>>>>>>>>>>>>>>>validated Data", validatedData)
    const data = await Wallet.generateAddress(validatedData)
    return res.status(201).json({
        success: true,
        message: "adddresss created",
        data
    })


})