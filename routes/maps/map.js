const express = require('express');
const router = express();

router.get('/maps/id/:code', (req,res) => {

    const mapCode = req.params.code;

    return res.render('maps/map', {
        mapCode: mapCode
    });

});

module.exports = router;