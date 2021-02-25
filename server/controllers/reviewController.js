const Review = require("../models/reviewModel");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find({});

  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: reviews,
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    product: req.body.product,
    user: req.user._id,
  });

  await Product.findByIdAndUpdate(
    { _id: req.body.product },
    {
      $push: { prd_reviews: newReview._id },
    }
  );

  res.status(201).json({
    status: "success",
    data: newReview,
  });
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review.user._id.equals(req.user._id)) {
    return next(
      new AppError("You are not allowed to update oters review!", 401)
    );
  }
  // const updatedReview = await Review.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );
  if (req.body.review) {
    review.review = req.body.review;
  }
  if (req.body.rating) {
    review.rating = req.body.rating;
  }

  await review.save();

  res.status(200).json({
    status: "success",
    data: review,
  });
});

exports.getReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: review,
  });
});

exports.deleteReview = catchAsync(async (req, res, next) => {
  await Review.findOneAndUpdate(req.user.id, {
    active: false,
  });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
