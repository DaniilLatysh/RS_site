var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect("mongodb://localhost/visit", config.get("mongoose.options"))

module.exports = mongoose;