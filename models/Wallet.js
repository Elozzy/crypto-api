module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define("wallet", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING
    },
    blockchain: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "blockchain name field is required"
        }
      }
    },
    network: {
      type: DataTypes.ENUM("mainnet", "testnet", "ropsten", "mordor"),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "network name field is required"
        }
      }
    },
    walletId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "walletId is required"
        }
      }
    }
  });
  return Wallet;
};
