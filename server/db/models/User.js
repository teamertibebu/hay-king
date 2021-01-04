const { Schema, model } = require('mongoose');
require('../index');

const UsersSchema = new Schema({
  id: 'number',
  name: 'string',
  image: 'string',
  provider: 'string',
});

const Users = model('Users', UsersSchema);

module.exports = {
  Users,
};
