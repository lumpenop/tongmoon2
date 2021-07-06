const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storelist', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    S_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    P_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    review: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storelist',
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
