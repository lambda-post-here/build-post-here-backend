const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

const postController = require('../controllers/postController');

router.route('/').post(authenticate, postController.userPost);

module.exports = router;
