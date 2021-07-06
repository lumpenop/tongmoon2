const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
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
    building: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    S_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ho: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    star: {
      type: DataTypes.STRING(50),
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
