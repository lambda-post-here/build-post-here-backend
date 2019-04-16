module.exports = {
  loginUser,
  registerUser
};

const Users = require('../database/helpers/auth-helpers');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken');

async function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return await res.status(404).json({ message: 'Login failed.' });
  }
  try {
    let user = await Users.getByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await generateToken(user);
      return await res.status(200).json({ token });
    } else {
      return await res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    return await res.status(500).json({ error });
  }
}
async function registerUser(req, res) {
  let { username, password } = req.body;
  if (!username || !password) {
    return await res.status(400).json({ error });
  }
  try {
    let hashedPassword = bcrypt.hashSync(password, 10);
    password = hashedPassword;

    const user = await Users.getByUsername(username);
    if (user !== undefined) throw error;
    await Users.insert({ username, password });
    return res.status(201).json({ message: 'Registration Successful' });
  } catch (error) {
    return await res.status(500).json({ error });
  }
}
