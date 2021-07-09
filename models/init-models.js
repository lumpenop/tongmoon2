var DataTypes = require("sequelize").DataTypes;
var _cart = require("./cart");
var _category_code = require("./category_code");
var _contents_reco = require("./contents_reco");
var _detail_order_history = require("./detail_order_history");
var _item_reco = require("./item_reco");
var _mid_code = require("./mid_code");
var _order_history = require("./order_history");
var _review = require("./review");
var _state_code = require("./state_code");
var _store = require("./store");
var _store_list = require("./store_list");
var _top_code = require("./top_code");
var _user = require("./user");

function initModels(sequelize) {
  var cart = _cart(sequelize, DataTypes);
  var category_code = _category_code(sequelize, DataTypes);
  var contents_reco = _contents_reco(sequelize, DataTypes);
  var detail_order_history = _detail_order_history(sequelize, DataTypes);
  var item_reco = _item_reco(sequelize, DataTypes);
  var mid_code = _mid_code(sequelize, DataTypes);
  var order_history = _order_history(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var state_code = _state_code(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var store_list = _store_list(sequelize, DataTypes);
  var top_code = _top_code(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    cart,
    category_code,
    contents_reco,
    detail_order_history,
    item_reco,
    mid_code,
    order_history,
    review,
    state_code,
    store,
    store_list,
    top_code,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
