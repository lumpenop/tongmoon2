const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', { //매장
    S_code: { //매장코드
      type: DataTypes.STRING(50),
      allowNull: true
    },
    building: { //상가빌딩
      type: DataTypes.STRING(50),
      allowNull: true
    },
    S_name: { //매장이름
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ho: { //호수
      type: DataTypes.STRING(50),
      allowNull: true
    },
    number: { //전화번호
      type: DataTypes.STRING(50),
      allowNull: true
    },
    star: { //평점
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: false
  });
};
