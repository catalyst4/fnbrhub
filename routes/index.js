const express = require('express');
const router = express();

const Map = require('../models/Map');

router.get('/', async (req,res) => {

    const title = 'All Maps';

    try {
        await Map.find((err,maps) => {
            err => console.log(err);
            let noMaps = false;
            if(maps.length < 1) {
                noMaps = true;
            }
            res.render('maps/index', { maps: maps, title });
        }).sort({ _id: -1 });
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;