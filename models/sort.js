const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sort', {
    small_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uri: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sort',
    timestamps: false
  });
};
