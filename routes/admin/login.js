const express = require('express');
const router = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const jwtPassword = process.env.JWT_PASSWORD;
console.log(process.env.JWT_PASSWORD + ' did it work?');

const ensureAuth = require('../../config/auth');

const User = require('../../models/User');

router.post('/admin/login', async (req,res) => {

    const { username, password } = req.body;

    if(!username || !password) {
        // Not all fields complete
        return res.render('admin/login', { err });
    }

    try  {

        const user = await User.findOne({ username: username });

        if(user) {

            const passwordValid = await bcrypt.compare(password, user.password);

            if(passwordValid) {
                
                // Create token
                const token = jwt.sign({
                    user: user._id,
                    iat: moment().add('1', 'month').valueOf()
                }, jwtPassword);
                
                // Add to DB for user
                user.authTokens.push({ token });
                await user.save();

                // Add to cache + redirect to /admin
                return res.cookie('userAuth', token).redirect('/admin');

            } else {
                // Password incorrect
                return res.render('admin/login', { err });
            }

        } else {
            // User doesn't exist but don't tell
            return res.render('admin/login', { err });
        }

    } catch(e) {
        console.log(e);
    }

});

router.post('/admin/logout', ensureAuth, async (req,res) => {

    try {
        
        const user = req.user;
        const userAuth = req.cookies.userAuth

        user.authTokens = user.authTokens.filter(token => {
            return token.token !== userAuth;
        });

        await user.save();
        
        res.clearCookie('userAuth').redirect('/');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;
