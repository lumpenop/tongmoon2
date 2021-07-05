var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _history = require("./history");
var _user = require("./user");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    comment,
    history,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
