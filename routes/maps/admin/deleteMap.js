const express = require('express');
const router = express();

const Map = require('../../../models/Map');

router.post('/maps/admin/delete', async (req,res) => {

    const code = req.body.code;

    try {

        await Map.findOneAndDelete({ code: code });

        res.redirect('/maps/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;