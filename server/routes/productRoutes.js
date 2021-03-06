const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    authController.allowedTo("seller"),
    productController.uploadProductPhoto,
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.allowedTo("seller"),
    productController.uploadProductPhoto,
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.allowedTo("seller"),
    productController.deleteProduct
  );

module.exports = router;
