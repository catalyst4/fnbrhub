const express = require('express');
const router = express();

const Map = require('../../models/Map');

router.get('/maps/newest', async (req,res) => {

    const title = 'Newest';

    try {

        await Map.find((err,maps) => {
            err => console.log(err);
            let noMaps = false;
            if(maps.length < 1) {
                noMaps = true;
            }
            return res.render('maps/index', { maps, noMaps, title });
        }).sort({ _id: -1 });


    } catch(e) {
        console.log(e);
    }

});

router.get('/maps/random', async (req,res) => {

    const title = 'Random';

    try {

        const randomMap = await Map.aggregate([{ $sample: { size: 1} }]);
        const map = randomMap[0];

        return res.render('maps/map', { map, title });

    } catch(e) {
        console.log(e);
    }

});

router.get('/maps/:type', async (req,res) => {

    const type = req.params.type;

    let title;

    if(type == 'deathrun') {
        title = 'Deathrun';
    }
    if(type == 'zone-wars') {
        title = 'Zone Wars';
    }
    if(type == 'prop-hunt') {
        title = 'Prop Hunt';
    }
    if(type == 'box-fights') {
        title = 'Box Fights';
    }
    if(type == 'puzzle') {
        title = 'Puzzle';
    }
    if(type == 'mini-game') {
        title = 'Mini Game';
    }
    if(type == 'races') {
        title = 'Races';
    }
    if(type == '1v1') {
        title = '1v1';
    }
    if(type == 'remake') {
        title = 'Remake';
    }
    if(type == 'escape') {
        title = 'Escape';
    }
    if(type == 'hide-n-seek') {
        title = 'Hide N Seek';
    }
    if(type == 'parkour') {
        title = 'Parkour';
    }
    if(type == 'adventure') {
        title = 'Adventure';
    }
    if(type == 'roleplay') {
        title = 'Roleplay';
    }
    if(type == 'edit-courses') {
        title = 'Edit Courses';
    }
    if(type == 'horror') {
        title = 'Horror';
    }
    if(type == 'gun-game') {
        title = 'Gun Game';
    }
    if(type == 'dropper') {
        title = 'Dropper';
    }
    if(type == 'music') {
        title = 'Music';
    }
    if(type == 'ffa') {
        title = 'FFA';
    }
    if(type == 'maze') {
        title = 'Maze';
    }
    if(type == 'snd') {
        title = 'Search & Destroy';
    }
    

    try {
        await Map.find({ type: title },(err,maps) => {
            err => console.log(err);
            let noMaps = false;
            if(maps.length < 1) {
                noMaps = true;
            }
            res.render('maps/index', { maps: maps, title });
        }).sort({ _id: -1 });
    } catch(e) {
        console.log(e);
    }
});

module.exports = router;