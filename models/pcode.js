const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcode', { //상품코드
    Big: { //대분류
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Mid: { //중분류
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Sml: { //소분류
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Pname: { //상품명
      type: DataTypes.STRING(50),
      allowNull: false
    },
    C_code: { //카테고리코드
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
