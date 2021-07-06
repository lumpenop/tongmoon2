const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    star: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    S_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
