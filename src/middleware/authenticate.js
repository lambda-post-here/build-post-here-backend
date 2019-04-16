const jwt = require('jsonwebtoken');

// require('dotenv').config();
const secret = 'my secret';
module.exports = function(req, res, next) {
  const token = req.get('Authorization');

  //   if (token) {
  //     jwt.verify(token, secret, (error, decoded) => {
  //       if (error) return res.status(401).json({ error: error });
  //       req.decoded = decoded;
  //     });
  //     next();
  //   }
  //   return res.status(401).json({ error: 'No token provided.' });
  // };

  if (token) {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        res.status(401).json({ error: error });
      }
      {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: 'No token provided.' });
  }
};

// function authenticate(req, res, next) {
//   const token = req.headers.authorization;

//   if (token) {
//     jwt.verify(token, jwtKey, (err, decoded) => {
//       if (err) {
//         res
//           .status(401)
//           .json({ errorMsg: err, message: 'Invalid Token, get another one!' });
//       }

//       {
//         req.decoded = decoded;

//         next();
//       }
//     });
//   } else {
//     return res.status(401).json({
//       error: 'No token provided, must be set on the Authorization Header'
//     });
//   }
// }
