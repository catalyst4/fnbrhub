const jwt = require('jsonwebtoken');

const jwtPassword = process.env.JWT_PASSWORD;

const User = require('../models/User');

const authorizeUser = async (req,res,next) => {

    const userAuth = req.cookies.userAuth;

    try {

        const payload = jwt.verify(userAuth, jwtPassword);
        const user = await User.findOne({ _id: payload.user, 'authTokens.token': userAuth });
        req.user = user;

    } catch(e) {
        req.user = null;
    }
    return next();
};

module.exports = authorizeUser;