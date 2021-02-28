const express = require("express");
const Seller = require("../models/sellerModel");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup(Seller));
router.get("/emailVerification", userController.emailVerification(Seller));
router.post(
  "/emailConfirmation/:token",
  authController.emailConfirmation(Seller)
);
router.post("/login", authController.login(Seller));
router.post("/forgetPassword", authController.forgetPassword(Seller));
router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getOne(Seller)
);
router.delete(
  "/deleteMe",
  authController.protect,
  userController.deleteMe(Seller)
);

router
  .route("/")
  .get(userController.getAll(Seller))
  .post(userController.createOne(Seller));

router
  .route("/:id")
  .get(userController.getOne(Seller))
  .patch(userController.updateOne(Seller))
  .delete(userController.deleteOne(Seller));

module.exports = router;
