const mongoose = require('mongoose');

const featuredMapSchema = mongoose.Schema({

    mapCode: {
        type: Number,
        required: true
    },
    featuredPlace: {
        type: Number,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Active'
    },
    mapId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Map',
        required: true
    }

});

const featuredMap = mongoose.model('featuredMap', featuredMapSchema, 'featuredMaps');

module.exports = featuredMap;