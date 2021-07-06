const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bcode', {
    Big: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Mid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Ename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bcode',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Big" },
        ]
      },
    ]
  });
};
