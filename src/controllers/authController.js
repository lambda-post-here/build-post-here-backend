module.exports = {
  loginUser,
  registerUser,
  getUsers
};

const Users = require('../database/helpers/auth-helpers');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken');

async function getUsers(req, res) {
  const users = await Users.get();
  res.status(200).json(users);
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return await res.status(404).json({ message: 'Login failed.' });
  }
  try {
    let user = await Users.getByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await generateToken(user);

      return await res.status(200).json({ message: 'Login Successful', token });
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
    await Users.insert({ username, password });

    const { id } = await Users.findBy(username);
    console.log(username);
    console.log(id);

    const token = await generateToken(username, id);
    const message = 'Registration Successful';
    return res.status(201).send({ message, token, id });
  } catch (error) {
    return await res.status(500).json({ error });
  }
}
