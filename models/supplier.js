"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supplier.hasMany(models.Transaction, { foreignKey: "id_supplier" });
    }
  }
  Supplier.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      no_handphone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Supplier",
    }
  );
  return Supplier;
};
