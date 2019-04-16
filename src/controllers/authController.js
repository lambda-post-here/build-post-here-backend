module.exports = {
  loginUser,
  registerUser,
  getUsers,
  updatePassword
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
      const token = await generateToken(user);

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

async function updatePassword(req, res) {
  const { id } = req.body;
  let { newPassword } = req.body;

  if (newPassword) {
    const tokenId = req.decoded.subject;

    if (id === tokenId) {
      try {
        const currentUser = await Users.getById(id);
        if (currentUser) {
          newPassword = bcrypt.hashSync(newPassword, 10);

          const updatedUser = await Users.update(id, newPassword);

          if (updatedUser) {
            res
              .status(200)
              .json({ message: 'Password was successfully updated.' });
          } else {
            res.status(500).json({
              message: `An error occurred while updating the password.`
            });
          }
        } else {
          res.status(404).json({
            message: 'Requested user could not be found in database.'
          });
        }
      } catch (error) {
        res.status(500).json({
          message: 'An error occurred while updating the password',
          error
        });
      }
    } else {
      res.status(403).json({ message: ' You cannot perform this operation.' });
    }
  } else {
    res.status(400).json({ message: 'Password was not supplied.' });
  }
}
