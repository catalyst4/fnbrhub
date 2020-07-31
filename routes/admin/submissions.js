const express = require('express');
const router = express();

router.get('/admin/submissions', (req,res) => {

    res.render('admin/submissions');

});

module.exports = router;