const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mid_code', {
    mid_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    mid_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    top_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mid_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mid_code" },
        ]
      },
    ]
  });
};
