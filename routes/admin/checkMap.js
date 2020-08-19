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

router.post('/api/searchMaps', async (req,res) => {

    const query = req.body.query;
    
    try {

        await Map.find({ $or: [{ name: query }, { code: query }, { type: query }]},(err, maps) => {
            err => console.log(err);
            let noMaps = false;
            if(maps) {
                if(maps.length < 1) {
                    noMaps = true;
                }    
                return res.json({ maps });
            } else {
                return;
            }
        }).sort({ _id: -1 });
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;