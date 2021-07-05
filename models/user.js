const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gender: {//?
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_number: {//전화번호
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_birth: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    point: {//포인트
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargecash: {//충전금액
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalprice: {//총구매금액
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false
  });
};
