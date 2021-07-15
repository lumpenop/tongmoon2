const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boardtitle', {
    group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uri: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'boardtitle',
    timestamps: false
  });
};
