const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env.JWT_SECRET;
const db = require('../database/helpers/auth-helpers');

router.get('/', (req, res) => {
  try {
    aModel.find().then(users => {
      res.status(200).json(users);
    });
  } catch (error) {
    res.status(500).json({ error: `Could not retrieve users: `, error });
  }
});

router.route('/register').post(async (req, res) => {
  const creds = req.body;
  const { username, password } = creds;
  if (username && password) {
    await db
      .insert(req.body)
      .then(statusCode => res.status(201).json(statusCode))
      .catch(err =>
        res
          .status(500)
          .json({ error: 'There was an error while registering the user' })
      );
  }
});

// router.post('/register', async (req, res) => {
//   let creds = req.body;
//   let { username, password } = creds;

//   if (!username || !password) {
//     return res.status(400).json({
//       message: `Both a username and a password are required to register`
//     });
//   } else {
//     try {
//       const hash = bcrypt.hashSync(creds.password, 5);
//       creds.password = hash;
//       const user = await aModel.add(creds);
//       const token = generateToken(user);
//       res.status(201).json({ username, token });
//     } catch (error) {
//       res.status(500).json({
//         error: `Error while registering user: `,
//         error
//       });
//     }
//   }
// });

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({
//       message: `Both a username and a password are require to register`
//     });
//   } else {
//     try {
//       aModel
//         .findBy({ username })
//         .first()
//         .then(user => {
//           if (user && bcrypt.compareSync(password, user.password)) {
//             const token = generateToken(user);
//             res.status(200).json({
//               message: `Successful log in`,
//               token
//             });
//           } else {
//             res.status(401).json({
//               message: `Login information incorrect. Please try again.`
//             });
//           }
//         });
//     } catch (error) {
//       res.status(500).json({
//         error: `Error while logging in: `,
//         error
//       });
//     }
//   }
// });

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
