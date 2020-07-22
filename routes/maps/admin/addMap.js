const express = require('express');
const router = express();

const Map = require('../../../models/Map');

router.post('/maps/admin/add', async (req,res) => {

    console.log('dkdkd')

    const { name, code, type, creator, description, youtubeLink } = req.body;

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

        console.log(map);

        res.redirect('/maps/submit');
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;