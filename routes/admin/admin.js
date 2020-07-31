const express = require('express');
const router = express();

router.get('/admin', (req,res) => {

    res.render('admin/admin')

});

module.exports = router;