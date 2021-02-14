const express = require("express");
const Seller = require("../models/sellerModel");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup(Seller));
router.post("/login", authController.login(Seller));
router.post("/getMe", userController.getMe, userController.getOne(Seller));

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
