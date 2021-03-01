const express = require("express");
const User = require("../models/userModel");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup(User));
router.get("/emailVerification", userController.emailVerification(User));
router.post(
  "/emailConfirmation/:token",
  authController.emailConfirmation(User)
);
router.post("/login", authController.login(User));
router.post("/forgetPassword", authController.forgetPassword(User));
router.patch("/resetPassword/:token", authController.resetPassword(User));
router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getOne(User)
);
router.delete(
  "/deleteMe",
  authController.protect,
  userController.deleteMe(User)
);

router
  .route("/")
  .get(userController.getAll(User))
  .post(userController.createOne(User));

router
  .route("/:id")
  .get(userController.getOne(User))
  .patch(userController.updateOne(User))
  .delete(userController.deleteOne(User));

module.exports = router;
