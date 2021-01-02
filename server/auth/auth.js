const { Router } = require('express');

const router = Router();
const passport = require('passport');
const db = require('../db/index');
var FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:8080/auth/facebook/callback',
      profileFields: ['email', 'gender', 'displayName', 'name'],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      return cb(null, profile);
    }
  )
);

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/home');
  }
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = router;
