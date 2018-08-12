const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    let data = req.user;
    data['status'] = true;
    res.contentType("application/json");
    res.send(JSON.stringify(data));
});

module.exports = router;
