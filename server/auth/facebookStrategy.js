// const passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// require('dotenv');

// console.log('aaaaaaaaaa');
// module.exports = () => {
//   passport.use(
//     new FacebookStrategy(
//       {
//         clientID: process.env.FACEBOOK_APP_ID,
//         clientSecret: process.env.FACEBOOK_APP_SECRET,
//         callbackURL: 'http://localhost:8080/auth/facebook/callback',
//       },
//       function (accessToken, refreshToken, profile, cb) {
//         User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//           return cb(err, user);
//         });
//       }
//     )
//   );
// };
