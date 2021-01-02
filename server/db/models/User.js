// const db = require('db');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: 'string',
  sex: 'string',
});

const User = model('User', UserSchema);

// User.createOne({ name: 'Teamer Tibebu', sex: 'male' });

const createUser = (body) => {
  const user = new User({
    name: 'Teamer Tibebu',
    sex: 'male',
  });

  User.create(user);
};

createUser();
module.exports = {
  User,
  createUser,
};
