const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcode', {
    Big: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Mid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Sml: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Pname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    C_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pcode',
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
