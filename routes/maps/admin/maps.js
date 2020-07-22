const express = require('express');
const router  = express();

const Map = require('../../../models/Map');

router.get('/maps/admin/maps', async (req,res) => {

    try {
        await Map.find((err,maps) => {
            err => console.log(err);
            res.render('maps/admin/maps', { maps: maps });
        });
    } catch(e) {
        console.log(e);
    }

});

router.post('/api/postCode', (req,res) => {

    const { code } = req.body;

    console.log(code);

});

module.exports = router;