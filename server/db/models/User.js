const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  id: 'number',
  name: 'string',
  image: 'string',
  provider: 'string',
});

const User = model('User', UserSchema);

module.exports = {
  User,
};
