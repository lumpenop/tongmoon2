const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    C_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    B_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    R_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    seller: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Get_num: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'history',
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
