module.exports = () => {
  const passport = require('passport');
  var TwitterStrategy = require('passport-twitter').Strategy;
  require('dotenv');

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_API_KEY,
        consumerSecret: process.env.TWITTER_API_SECRET,
        callbackURL: '/auth/twitter/callback',
      },
      function (token, tokenSecret, profile, cb) {
        return cb(null, profile);
      }
    )
  );
};
