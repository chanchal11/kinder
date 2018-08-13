const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new LinkedInStrategy({
        // options for google strategy
        clientID: keys.linkedin.clientID,
        clientSecret: keys.linkedin.clientSecret,
        callbackURL: '/auth/linkedin/callback'
    }, (accessToken, refreshToken, profile, done) => {

      if(profile._json.positions._total > 0)
      {
        console.log("profile._json.positions.values[0] :->");
        console.log(profile._json.positions.values[0]);
      }
      if(profile._json.industry != null)
      {
        console.log(profile._json.industry);
      }
      if(profile._json.currentShare.source != null )
      {
        console.log("profile._json.currentShare.source:->");
        console.log(profile._json.currentShare.source);
      }

      if(profile._json.currentShare.visibility != null )
      {
        console.log("profile._json.currentShare.visibility:->");
        console.log(profile._json.currentShare.visibility);
      }
        // check if user already exists in our own db
        User.findOne({ lid: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    name: profile._json.formattedName,
                    firstName: profile._json.firstName,
                    lastName: profile._json.lastName,
                  lid: profile._json.id ,
                  thumbnail: profile._json.pictureUrl,
                  location: profile._json.location.name ,
                  numConns: profile._json.numConnections ,
                  headline : profile._json.headline ,
                  publicProfileUrl /*publicProfile*/: profile._json.publicProfileUrl
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);
