const mongoose = require('mongoose');
const keys = require('../config/dev');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

module.exports = { mongoose };
