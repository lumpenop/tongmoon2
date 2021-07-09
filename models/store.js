const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    store_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    store_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    store_star: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_code" },
        ]
      },
    ]
  });
};
