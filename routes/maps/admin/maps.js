const express = require('express');
const router  = express();

router.get('/maps/admin/maps', (req,res) => {

    res.render('maps/admin/maps');

});

module.exports = router;