const express = require('express');
const router = express();

router.get('/', (req,res) => {

    const type = 'All Maps';

    res.render('maps/index', { type });

});

module.exports = router;