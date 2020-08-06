const express = require('express');
const User = require('../../models/User');
const router = express();
const bcrypt = require('bcryptjs');

const ensureAuth = require('../../config/auth');

router.get('/admin/add-user', ensureAuth, (req,res) => {

    return res.render('admin/add-user');

});

router.post('/admin/addUser', ensureAuth, async (req,res) => {

    const { name, username, password } = req.body;

    if(!name || !username || !password) {
        // Fields incomplete
        return res.render('admin/admin');
    }

    try {

        const usernameTaken = await User.findOne({ username: username });

        if(!usernameTaken) {

            const user = new User();
            user.name = name;
            user.username = username;

            bcrypt.hash(password, 10, async (err, hash) => {
                err => console.log(err);
                user.password = hash;
                await user.save();

                return res.redirect('admin');
            });

        } else {
            return res.render('admin/admin');
        }

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;