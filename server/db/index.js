const mongoose = require('mongoose');
require('dotenv');
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.yfpbe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.info(`Connected to DB`);
  })
  .catch((err) => {
    console.info(err);
  });

const db = mongoose.connection;

module.exports = db;
