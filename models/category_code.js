const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_code', {
    category_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    top_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mid_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    small_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'category_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_code" },
        ]
      },
    ]
  });
};
