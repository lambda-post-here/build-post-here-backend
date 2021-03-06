module.exports = {
  loginUser,
  registerUser,
  getUsers,
  updatePassword,
  deleteUser
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
    let user = await Users.findBy(username);
    let { id } = user;

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await generateToken(username, id);

      return await res
        .status(200)
        .json({ message: 'Login Successful', token, id });
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
    return await res
      .status(400)
      .json({ message: 'Please enter a username and password to register.' });
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

async function updatePassword(req, res) {
  const userID = req.decoded.subject;
  let { password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    password = hashedPassword;

    await Users.update(userID, password);
    res.status(200).json({
      message: 'Password was successfully updated'
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating the password.',
      error
    });
  }
}

async function deleteUser(req, res) {
  try {
    const userID = req.decoded.subject;
    console.log(userID);
    // const user = await Users.getById(userID);
    const result = await Users.remove(userID);
    // if (user === 0 || result === 0) throw err;
    return await res.status(200).json({ message: 'user deleted' });
  } catch (error) {
    return await res.status(404).json({ message: 'user not found' });
  }
}
