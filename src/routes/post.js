const router = require('express').Router();

const postController = require('../controllers/postController');

router.route('/').get(postController.submitPost);

module.exports = router;
