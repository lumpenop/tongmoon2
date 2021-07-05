var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _history = require("./history");
var _user = require("./user");
var _bcode = require("./bcode");
var _contentsreco = require("./contentsreco");
var _itemreco = require("./itemreco");
var _mcode = require("./mcode");
var _pcode = require("./pcode");
var _store = require("./store");
var _storelist = require("./storelist");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var bcode = _bcode(sequelize, DataTypes);
  var contentsreco = _contentsreco(sequelize, DataTypes);
  var itemreco = _itemreco(sequelize, DataTypes);
  var mcode = _mcode(sequelize, DataTypes);
  var pcode = _pcode(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var storelist = _storelist(sequelize, DataTypes);



  return {
    comment,
    history,
    user,
    bcode,
    contentsreco,
    itemreco,
    mcode,
    pcode,
    store,
    storelist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
