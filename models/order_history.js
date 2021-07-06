const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_history', {
    order_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    userid: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_history',
    timestamps: false
  });
};
