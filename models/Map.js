const mongoose = require('mongoose');
const { map } = require('../routes');

const mapSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        default: 'Active'
    }

});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;