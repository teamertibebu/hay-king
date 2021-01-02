const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const dirPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.json());
app.use(express.static(dirPath));
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('./auth/auth');

app.use('/auth', authRoute);

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.listen(PORT, () => {
  console.info(`Connected on http://localhost:${PORT}`);
});
