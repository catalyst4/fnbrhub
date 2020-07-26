const express = require('express');
const router = express();

const Map = require('../../../models/Map');

router.post('/maps/admin/add', async (req,res) => {

    console.log('dkdkd')

    const { name, code, type, creator, description, youtubeLink } = req.body;
    console.log(req.body);

    if(!name || !code || !type || !creator || !description || !youtubeLink) {

    }

    try {

        const map = new Map({
            name,
            code,
            type,
            creator,
            description,
            youtubeLink
        });

        await map.save();

        res.redirect('/maps/admin/maps');
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;