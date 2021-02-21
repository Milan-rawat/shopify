const mongoose = require("mongoose");
const Product = require("./productModel");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Review can not be empty!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Review must belong to a product."],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user."],
  },
  active: {
    type: Boolean,
    select: false,
    default: true,
  },
});

// QUERY MIDDLEWARE
reviewSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName lastName photo",
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (prdId) {
  const stats = await this.aggregate([
    {
      $match: { product: prdId },
    },
    {
      $group: {
        _id: "$product",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  // console.log(stats);

  if (stats.length > 0) {
    await Product.findByIdAndUpdate(prdId, {
      prd_ratingsQuantity: stats[0].nRating,
      prd_ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Product.findByIdAndUpdate(prdId, {
      prd_ratingsQuantity: 0,
      prd_ratingsAverage: 4.5,
    });
  }
};

reviewSchema.post("save", function () {
  // this points to current review

  this.constructor.calcAverageRatings(this.product);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
