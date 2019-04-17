const router = require('express').Router();

const postController = require('../controllers/postController');

router.route('/').post(postController.userPost);
// .get(postController.postData);

module.exports = router;
