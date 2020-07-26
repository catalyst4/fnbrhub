const express = require('express');
const router = express();

const Map = require('../../models/Map');

router.get('/maps/id/:code', async (req,res) => {

    const code = req.params.code;
    try {

        const map = await Map.findOne({ code: code });

        return res.render('maps/map', { map });

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;