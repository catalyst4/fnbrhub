const express = require('express');
const router = express();

router.get('/admin/featured', async (req,res) => {

    return res.render('admin/featured');

});

module.exports = router;