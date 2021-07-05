const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    C_code: {//코드
      type: DataTypes.STRING(50),
      allowNull: false
    },
    B_time: {//산시간
      type: DataTypes.STRING(100),
      allowNull: false
    },
    R_time: {//예약시간
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userid: {//산사람
      type: DataTypes.STRING(100),
      allowNull: false
    },
    seller: {//상점
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Get_num: {//주문번호
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {//상태
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'history',
    timestamps: false
  });
};
