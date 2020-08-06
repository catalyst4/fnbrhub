const express = require('express');
const router = express();

router.get('/admin', (req,res) => {

    if(!req.user) {
        return res.render('admin/login');
    }

    return res.render('admin/admin');

});

module.exports = router;