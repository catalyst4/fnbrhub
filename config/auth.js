const ensureAuth = (req,res,next) => {
    if(req.user) {
        return next();
    } else {
        res.redirect('/admin');
    }
}

module.exports = ensureAuth;