const express = require('express');
const router = express();

router.get('/maps/submit', (req,res) => {

    console.log('hello');
    res.render('maps/submit');

});

module.exports = router;