const express = require('express');
const router = express();

const upload = require('../../../config/upload');

const multiUpload = upload.fields([
    { name: 'image1', maxCount: 1},
    { name: 'image2', maxCount: 1},
    { name: 'image3', maxCount: 1},
    { name: 'image4', maxCount: 1},
]);

const Map = require('../../../models/Map');

router.post('/maps/admin/add', multiUpload, async (req,res) => {

    const { name, code, type, creator, description, youtubeLink } = req.body;
    const image1 = req.files.image1;
    const image2 = req.files.image2;
    const image3 = req.files.image3;
    const image4 = req.files.image4;
    
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

        if(image1) {
            map.image1 = image1[0].key;
        }
        if(image2) {
            map.image2 = image2[0].key;
        }
        if(image3) {
            map.image3 = image3[0].key;
        }
        if(image4) {
            map.image4 = image4[0].key;
        }

        await map.save();

        res.redirect('/maps/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;