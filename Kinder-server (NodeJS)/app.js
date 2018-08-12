const express = require('express');
const cookieSession = require('cookie-session');
const expSession = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');
const app = express();
app.use('/static', express.static(path.join(__dirname, 'static')));
// set view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(expSession({
    secret: keys.session.cookieKey
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
