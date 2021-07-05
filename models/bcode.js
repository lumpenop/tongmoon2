const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bcode', { //대분류코드
    Big: { //대분류
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Mid: { //중분류
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Ename: { //영어이름
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
