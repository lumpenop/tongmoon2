const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    user_address: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargecash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalprice: {
      type: DataTypes.STRING(100),
      allowNull: true
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
          { name: "id" },
        ]
      },
    ]
  });
};
