const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store_list', {
    product_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    store_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    star: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    review_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
    ]
  });
};
