const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Place = require('../models/Place');


const connection = new Sequelize(dbConfig);

User.init(connection);
Place.init(connection);

Place.associate(connection.models);
User.associate(connection.models);


module.exports = connection;