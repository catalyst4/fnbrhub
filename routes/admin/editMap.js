const express = require('express');
const router = express();

const Map = require('../../models/Map');

router.post('/admin/edit', async (req,res) => {

    const { id, name, code, type, creator, description, youtubeLink } = req.body;

    if(!name || !code || !type || !creator || !description || !youtubeLink) {

    }

    let linkId;

    if(youtubeLink.includes('https://www.youtube.com/watch?v=')) {
        linkId = youtubeLink.split('https://www.youtube.com/watch?v=');
    }

    if(youtubeLink.includes('https://youtube.com/watch?v=')) {
        linkId = youtubeLink.split('https://youtube.com/watch?v=');
    }

    if(youtubeLink.includes('https://youtu.be/')) {
        linkId = youtubeLink.split('https://youtu.be/');
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

        if(linkId != map.youtubeLink) {
            map.youtubeLink = linkId
        }

        await map.save();

        return res.redirect('/admin/maps');

    } catch(e) {
        console.log(e);
    }

});

module.exports = router;

