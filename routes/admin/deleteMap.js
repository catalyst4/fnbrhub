const express = require('express');
const router = express();

const ensureAuth = require('../../config/auth');

const Map = require('../../models/Map');

router.post('/maps/admin/delete', ensureAuth, async (req,res) => {

    const code = req.body.code;

    try {

        await Map.findOneAndDelete({ code: code });

        res.redirect('/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;