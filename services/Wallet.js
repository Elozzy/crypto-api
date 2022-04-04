const models = require("../models");
const ErrorHandler = require("../utils/ErrorHandler");
const {
  Sequelize: { Op }
} = models;
const axios = require("axios");

class Wallet {
  static async generateAddress(data) {
    const { blockchain, network, walletId } = data;

    console.log(">>>>>>>data service",data)

    let genAddress = await axios.post(
      `https://rest.cryptoapis.io/v2/wallet-as-a-service/wallets/${walletId}/${blockchain}/${network}/addresses`,
      data,
      {
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": "ADD-YOUR API KEY"
          }
      }
    );

    return genAddress
  }
}

module.exports = Wallet;
