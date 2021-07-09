'use strict';


const Sequelize = require('sequelize');
const initModels = require('./init-models');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.cart = models.cart;
db.commment = models.commment;
db.history = models.history;
db.bcode = models.bcode;
db.pcode = models.pcode;
db.mcode = models.mcode;
db.store = models.store;
db.storelist = models.storelist;
db.itemreco = models.itemreco;
db.contentsreco = models.contentsreco;

module.exports = db;
