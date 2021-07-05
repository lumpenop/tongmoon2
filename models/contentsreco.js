const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contentsreco', { //컨텐츠 기반 추천항목
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    file02: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contentsreco',
    timestamps: false
  });
};
