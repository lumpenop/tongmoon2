const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storelist', { //매장상품목록
    S_code: { //매장코드
      type: DataTypes.STRING(50),
      allowNull: true
    },
    P_code: { //상품코드
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: { //상품가격
      type: DataTypes.STRING(50),
      allowNull: true
    },
    review: { //후기
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storelist',
    timestamps: false
  });
};
