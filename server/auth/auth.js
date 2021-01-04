const { Router } = require('express');

const router = Router();
const passport = require('passport');
const db = require('../db/index');
const { User } = require('../db/models/User');
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
      // console.log(profile);
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
    const newUser = new User({
      id: Number(req.user.id),
      name: req.user.displayName,
    });
    res.cookie('HayKingId', req.user.id);

    User.findOne({ id: newUser.id }).then((data) => {
      if (data) {
        res.redirect('/home');
        userInfo = data;
      } else {
        newUser.save().then(() => {
          userInfo = newUser;
          res.redirect('/home');
        });
      }
    });
    // res.send('Successss');
  }
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = router;
