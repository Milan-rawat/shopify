const User = require("../models/userModel");
const Seller = require("../models/sellerModel");
const catchAsync = require("../utils/catchAsync");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find({});

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  });

exports.createOne = (Model) => async (req, res) => {
  res.status(200).json({
    status: "error",
    message: "Please use /signup instead!",
  });
};

exports.getOne = (Model) => async (req, res) => {
  const doc = await Model.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: doc,
  });
};

exports.updateOne = (Model) => async (req, res) => {
  const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: updatedDoc,
  });
};

exports.deleteOne = (Model) => async (req, res) => {
  res.status(200).json({
    status: "error",
    message: "You do not have permission to delete users!",
  });
};
