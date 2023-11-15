"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.Category, { foreignKey: "id_category" });
      Inventory.hasMany(models.Transaction, { foreignKey: "id_inventory" });
    }
  }
  Inventory.init(
    {
      id_category: {
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
      },
      inventory_name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  return Inventory;
};
