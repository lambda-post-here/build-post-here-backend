require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function generateToken(username, id) {
  // console.log(username);
  // console.log(id);
  const payload = {
    subject: id,
    username: username
  };

  const secret = 'my secret';

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
};
