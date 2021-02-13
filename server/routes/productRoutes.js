const express = require("express");
const User = require("../models/userModel");
const Seller = require("../models/sellerModel");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    authController.protect(Seller),
    authController.allowedTo("seller"),
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
