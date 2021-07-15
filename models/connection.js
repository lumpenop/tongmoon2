const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('connection', {
    '열 1': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '열 2': {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'connection',
    timestamps: false
  });
};
