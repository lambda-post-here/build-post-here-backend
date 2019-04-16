const router = require('express').Router();

const authController = require('../controllers/authController');
router.route('/login').post(authController.loginUser);
router.route('/register').post(authController.registerUser);
router.route('/users').get(authController.getUsers);

module.exports = router;
