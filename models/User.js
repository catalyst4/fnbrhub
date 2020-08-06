const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    password: {
        type: String,
        required: true
    },
    authTokens: [{
        token: {
            type: String,
            required: false
        }
    }]

});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;