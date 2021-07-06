var DataTypes = require("sequelize").DataTypes;
var _bcode = require("./bcode");
var _comment = require("./comment");
var _contentsreco = require("./contentsreco");
var _history = require("./history");
var _itemreco = require("./itemreco");
var _mcode = require("./mcode");
var _order_history = require("./order_history");
var _pcode = require("./pcode");
var _state_code = require("./state_code");
var _store = require("./store");
var _storelist = require("./storelist");
var _user = require("./user");

function initModels(sequelize) {
  var bcode = _bcode(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var contentsreco = _contentsreco(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var itemreco = _itemreco(sequelize, DataTypes);
  var mcode = _mcode(sequelize, DataTypes);
  var order_history = _order_history(sequelize, DataTypes);
  var pcode = _pcode(sequelize, DataTypes);
  var state_code = _state_code(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var storelist = _storelist(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    bcode,
    comment,
    contentsreco,
    history,
    itemreco,
    mcode,
    order_history,
    pcode,
    state_code,
    store,
    storelist,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
