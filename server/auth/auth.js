const { Router } = require('express');

const router = Router();
const passport = require('passport');
const db = require('../db/index');
const { User } = require('../db/models/User');
var FacebookStrategy = require('./facebookStrategy');
var TwitterStrategy = require('./twitterStrategy');
var GoogleStrategy = require('./googleStrategy');

require('dotenv');

FacebookStrategy();
TwitterStrategy();
GoogleStrategy();

router.get('/facebook', passport.authenticate('facebook'));
router.get('/twitter', passport.authenticate('twitter'));
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    const newUser = new User({
      id: req.user.id,
      name: req.user.displayName,
      image: req.user.photos[0].value,
      provider: req.user.provider,
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
  }
);

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    console.log(req.user);

    const newUser = new User({
      id: req.user.id,
      name: req.user.displayName,
      image: req.user.photos[0].value,
      provider: req.user.provider,
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
  }
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    const newUser = new User({
      id: req.user.id,
      name: req.user.displayName,
      image: req.user.photos[0].value,
      provider: req.user.provider,
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
  }
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = router;
