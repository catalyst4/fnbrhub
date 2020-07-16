const express = require('express');
const router = express();

router.get('/maps/admin', (req,res) => {

    res.render('/admin/admin')

});

module.exports = router;