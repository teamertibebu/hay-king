const express = require('express');
require('dotenv').config();
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8080;
const dirPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.json());
app.use(express.static(dirPath));

app.listen(PORT, () => {
  console.info(`Connected on http://localhost:${PORT}`);
});
