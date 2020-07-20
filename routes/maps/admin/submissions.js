const express = require('express');
const router = express();

router.get('/maps/admin/submissions', (req,res) => {

    res.render('maps/admin/submissions');

});

module.exports = router;