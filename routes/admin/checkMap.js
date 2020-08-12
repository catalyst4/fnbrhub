const express = require('express');
const router = express();

const Map = require('../../models/Map');

router.post('/api/checkMap', async (req,res) => {

    const code = req.body.code;

    const checkMap = await Map.findOne({ code });

    if(checkMap) {
        res.json({ error: 'Already a map!' });
    } else {
        return;
    }

});

module.exports = router;