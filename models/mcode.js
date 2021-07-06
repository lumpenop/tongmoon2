const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcode', {
    Big: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Mid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Pname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Ename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mcode',
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
