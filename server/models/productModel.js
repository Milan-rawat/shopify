const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    prd_name: {
      type: String,
      required: [true, "Product must have a name!"],
    },
    prd_reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    prd_category: {
      type: String,
      reuired: [true, "Product must have a Category!"],
    },
    prd_ratingsQuantity: {
      type: Number,
      default: 0,
    },
    prd_ratingsAverage: {
      type: Number,
      default: 5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    prd_price: {
      type: Number,
      required: [true, "Product must have a price!"],
    },
    prd_summary: {
      type: String,
      trim: true,
      required: [true, "Product must have a description!"],
    },
    prd_stock: {
      type: Number,
      default: 1,
    },
    prd_imageMain: {
      type: String,
      required: [true, "Product must have an image!"],
    },
    prd_images: [String],
    prd_description: {
      type: String,
      trim: true,
      minlength: [
        50,
        "A Product description must have more or equal 50 characters",
      ],
    },
    prd_slug: String,
    prd_Seller: {
      type: mongoose.Schema.ObjectId,
      ref: "Seller",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productSchema.pre("save", function (next) {
  this.prd_slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
productSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
