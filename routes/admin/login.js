const express = require('express');
const router = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const jwtPassword = process.env.JWT_PASSWORD;

router.get('/admin/login', (req,res) => {
    res.render('admin/login');
})

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

                // Add to cache + redirect to /admin
                return res.cookie('userAuth', token).redirect('admin');

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

module.exports = router;
