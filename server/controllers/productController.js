const multer = require("multer");
const Seller = require("../models/sellerModel");
const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/products");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `product-${req.user.id}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 404), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductPhoto = upload.single("prd_imageMain");

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create({
    prd_name: req.body.prd_name,
    prd_category: req.body.prd_category,
    prd_price: req.body.prd_price,
    prd_summary: req.body.prd_summary,
    prd_stock: req.body.prd_stock,
    prd_imageMain: req.file.filename,
    prd_images: req.body.prd_images,
    prd_description: req.body.prd_description,
    prd_seller: req.user._id,
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
  const product = await Product.findById(req.params.id);

  if (!req.user._id.equals(product.prd_seller._id)) {
    return next(
      new AppError("Your are not alowed to update othres product", 403)
    );
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  updatedProduct.prd_imageMain = req.file.filename;
  await updatedProduct.save();

  res.status(200).json({
    status: "success",
    data: updatedProduct,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!req.user._id.equals(product.prd_seller._id)) {
    return next(
      new AppError("You are not allowed to delete others product!", 403)
    );
  }
  product.active = false;
  await product.save();

  res.status(200).json({
    status: "success",
    data: null,
  });
});
