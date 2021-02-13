const User = require("../models/userModel");
const Seller = require("../models/sellerModel");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create({
    prd_name: req.body.prd_name,
    prd_category: req.body.prd_category,
    prd_price: req.body.prd_price,
    prd_summary: req.body.prd_summary,
    prd_stock: req.body.prd_stock,
    prd_imageMain: req.body.prd_imageMain,
    prd_images: req.body.prd_images,
    prd_description: req.body.prd_description,
    prd_Seller: req.user._id,
  });

  await Seller.findByIdAndUpdate(
    { _id: req.user._id },
    {
      $push: { sellingProducts: product._id },
    }
  );

  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({});

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: updatedProduct,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndUpdate(req.params.id, { active: false });

  res.status(200).json({
    status: "success",
    data: null,
  });
});
