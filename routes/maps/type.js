const express = require('express');
const router = express();

router.get('/maps/newest', (req,res) => {

    res.render('maps/index', { type: 'Newest'});

});

router.get('/maps/popular', (req,res) => {

    res.render('maps/index', { type: 'Popular'});

});

router.get('/maps/featured', (req,res) => {

    res.render('maps/index', { type: 'Featured'});

});

router.get('/maps/random', (req,res) => {

    res.render('maps/index', { type: 'Random'});

});

router.get('/maps/deathrun', (req,res) => {

    res.render('maps/index', { type: 'Deathrun'});

});

router.get('/maps/zone-wars', (req,res) => {

    res.render('maps/index', { type: 'Zone Wars'});

});

router.get('/maps/escape', (req,res) => {

    res.render('maps/index', { type: 'Escape'});

});

router.get('/maps/prop-hunt', (req,res) => {

    res.render('maps/index', { type: 'Prop Hunt'});

});

router.get('/maps/box-fights', (req,res) => {

    res.render('maps/index', { type: 'Box Fights'});

});

router.get('/maps/training', (req,res) => {

    res.render('maps/index', { type: 'Training'});

});

router.get('/maps/remake', (req,res) => {

    res.render('maps/index', { type: 'Remake'});

});

router.get('/maps/adventure', (req,res) => {

    res.render('maps/index', { type: 'Adventure'});

});

router.get('/maps/gun-game', (req,res) => {

    res.render('maps/index', { type: 'Gun Game'});

});

router.get('/maps/parkour', (req,res) => {

    res.render('maps/index', { type: 'Parkour'});

});

router.get('/maps/1v1', (req,res) => {

    res.render('maps/index', { type: '1v1'});

});

router.get('/maps/races', (req,res) => {

    res.render('maps/index', { type: 'Races'});

});

module.exports = router;