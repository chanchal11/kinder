const router = require('express').Router();
const passport = require('passport');

/* auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});
*/
router.get('/login', passport.authenticate('linkedin', {
    scope: ['r_basicprofile'], state: true
}));

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with linkedin
router.get('/linkedin', passport.authenticate('linkedin', {
    scope: ['r_basicprofile'],state:true
}));

// callback route for linkedin to redirect to
// hand control to passport to use code to grab profile info
router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
