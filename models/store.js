const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_code: {
      type: DataTypes.STRING(100),
      allowNull: true
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
          { name: "id" },
        ]
      },
    ]
  });
};
