const Joi = require("@hapi/joi");
const isEmpty = require("./is-empty");

exports.walletAddressValidation = async (data) => {
  data.blockchain = !isEmpty(data.blockchain) ? data.blockchain : "";
  data.network = !isEmpty(data.network) ? data.network : "";
  data.walletId = !isEmpty(data.walletId) ? data.walletId : "";

  const walletSchema = Joi.object({
    blockchain: Joi.string()
      .required()
      .valid(
        "bitcoin",
        "bitcoin-cash",
        "litecoin",
        " dogecoin",
        " dash",
        " ethereum",
        "ethereum-classic",
        "xrp",
        "zcash",
        "binance-smart-chain"
      )
      .messages({
        "string.empty": "must not be empty",
        "any.only":
          "must be either bitcoin bitcoin-cash litecoin dogecoin dash ethereum ethereum-classic xrp zcash binance-smart-chain",
        "any.required": "blockchain name is required"
      }),
      network: Joi.string().required().valid("mainnet ","testnet", "ropsten" ,"mordor").messages({
        "string.empty": "must not be empty",
        "any.only":
          "must be eithe rmainnet testnet ropsten mordor",
        "any.required": "network name is required"
      }),
      walletId: Joi.string()
  });
  return await walletSchema.validateAsync(data, {abortEarly: false});
};
