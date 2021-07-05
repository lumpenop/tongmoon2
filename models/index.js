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
db.user = models.user;
db.commment = models.commment;
db.history = models.history;

module.exports = db;
