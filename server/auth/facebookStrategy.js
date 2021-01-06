module.exports = () => {
  const passport = require('passport');
  var FacebookStrategy = require('passport-facebook').Strategy;
  const { User } = require('../db/models/User');
  require('dotenv');

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['email', 'displayName', 'picture'],
      },
      function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
      }
    )
  );
};
