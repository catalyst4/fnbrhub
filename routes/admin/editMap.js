const express = require('express');
const router = express();

const ensureAuth = require('../../config/auth');

const Map = require('../../models/Map');

router.post('/admin/edit', ensureAuth, async (req,res) => {

    const { id, name, code, type, creator, description, youtubeLink } = req.body;

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

        const map = await Map.findOne({ code: id });

        if(name != map.name) {
            map.name = name;
        }

        if(code != map.code) {
            map.code = code;
        }

        if(type != map.type) {
            map.type = type;
        }

        if(creator != map.creator) {
            map.creator = creator
        }

        if(description != map.description) {
            map.description = description
        }

        if(videoId != map.youtubeLink) {
            map.youtubeLink = videoId
        }

        await map.save();

        return res.redirect('/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;

