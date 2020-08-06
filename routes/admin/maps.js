const express = require('express');
const router  = express();

const ensureAuth = require('../../config/auth');

const Map = require('../../models/Map');

router.get('/admin/maps', ensureAuth, async (req,res) => {

    try {
        await Map.find((err,maps) => {
            err => console.log(err);
            let noMaps = false;
            if(maps.length < 1) {
                noMaps = true;
            }
            res.render('admin/maps', { maps: maps, noMaps });
        }).sort({ _id: -1 });
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;