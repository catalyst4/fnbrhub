const mongoose = require('mongoose');
const { map } = require('../routes');

const mapSchema = mongoose.Schema({

});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;