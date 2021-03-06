const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_birth: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cash: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
