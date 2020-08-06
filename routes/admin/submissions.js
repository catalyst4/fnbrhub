const express = require('express');
const router = express();

const ensureAuth = require('../../config/auth');

router.get('/admin/submissions', ensureAuth, (req,res) => {

    res.render('admin/submissions');

});

module.exports = router;