const router = require("express").Router();
const authenticate = require("../middleware/authenticate");

const authController = require("../controllers/authController");
router.route("/login").post(authController.loginUser);
router.route("/register").post(authController.registerUser);
router
  .route("/users")
  .get(authController.getUsers)
  .put(authenticate, authController.updatePassword)
  .delete(authenticate, authController.deleteUser);

module.exports = router;
