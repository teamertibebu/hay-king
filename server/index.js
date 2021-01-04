const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const dirPath = path.join(__dirname, '..', 'client', 'dist');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(dirPath));
app.use(
  session({
    secret: process.env.FACEBOOK_APP_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('./auth/auth');

app.use('/auth', authRoute);

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/dist/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(PORT, () => {
  console.info(`Connected on http://localhost:${PORT}`);
});
