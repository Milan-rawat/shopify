const express = require("express");
const reviewController = require("./../controllers/reviewController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(authController.allowedTo("user"), reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(authController.allowedTo("user"), reviewController.updateReview)
  .delete(authController.allowedTo("user"), reviewController.deleteReview);

module.exports = router;
