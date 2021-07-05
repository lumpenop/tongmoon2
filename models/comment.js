const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    userid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    review: {//후기
      type: DataTypes.STRING(100),
      allowNull: false
    },
    star: {//별점 string?
      type: DataTypes.STRING(100),
      allowNull: false
    },
    S_code: {//상점코드
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product: {//상품이름????
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comment',
    timestamps: false
  });
};
