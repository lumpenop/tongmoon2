const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemreco', { //아이템 기반 추천항목
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    file01: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemreco',
    timestamps: false
  });
};
