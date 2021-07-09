const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    userid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    product_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    store_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cart',
    timestamps: false
  });
};
