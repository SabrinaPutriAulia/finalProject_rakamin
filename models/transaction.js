"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Inventory, { foreignKey: "id_inventory" });
      Transaction.belongsTo(models.Admin, { foreignKey: "id_admin" });
      Transaction.belongsTo(models.Supplier, { foreignKey: "id_supplier" });
      Transaction.belongsTo(models.Customer, { foreignKey: "id_customer" });
    }
  }
  Transaction.init(
    {
      id_inventory: {
        type: DataTypes.INTEGER,
        references: {
          model: "Inventory",
          key: "id",
        },
      },
      id_admin: {
        type: DataTypes.INTEGER,
        references: {
          model: "Admin",
          key: "id",
        },
      },
      id_supplier: {
        type: DataTypes.INTEGER,
        references: {
          model: "Supplier",
          key: "id",
        },
      },
      id_customer: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customer",
          key: "id",
        },
      },
      qty: DataTypes.INTEGER,
      date: DataTypes.DATE,
      in_out: DataTypes.SMALLINT,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
