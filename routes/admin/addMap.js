const express = require('express');
const router = express();

const ensureAuth = require('../../config/auth');

const upload = require('../../config/upload');

const multiUpload = upload.fields([
    { name: 'image1', maxCount: 1},
    { name: 'image2', maxCount: 1},
    { name: 'image3', maxCount: 1},
    { name: 'image4', maxCount: 1},
]);

const Map = require('../../models/Map');

router.post('/maps/admin/add', ensureAuth, multiUpload, async (req,res) => {

    const { name, code, type, creator, description, youtubeLink } = req.body;
    const image1 = req.files.image1;
    const image2 = req.files.image2;
    const image3 = req.files.image3;
    const image4 = req.files.image4;
    
    if(!name || !code || !type || !creator || !description || !youtubeLink) {

    }

    let split1;
    let split2;
    let videoId;

    if(youtubeLink.includes('https://www.youtube.com/watch?v=')) {
        split1 = youtubeLink.split('https://www.youtube.com/watch?v=');
        videoId = split1[1];
    }

    if(youtubeLink.includes('https://youtube.com/watch?v=')) {
        split1 = youtubeLink.split('https://youtube.com/watch?v=');
        videoId = split1[1];
    }

    if(youtubeLink.includes('https://youtu.be/')) {
        split1 = youtubeLink.split('https://youtu.be/');
        videoId = split1[1];
    }

    if(youtubeLink.includes('&feature=emb_title')) {
        split1 = youtubeLink.split('https://www.youtube.com/watch?v=');
        split2 = split1[1].split('&feature=emb_title');
        videoId = split2[0];
    }

    try {

        const isMap = await Map.findOne({ code: code });
        if(isMap) {
            return res.redirect('/admin');
        }

        const map = new Map({
            name,
            code,
            type,
            creator,
            description,
            youtubeLink: videoId
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

        res.redirect('/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;