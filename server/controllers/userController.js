const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
});

exports.createUser = async (req, res) => {
  res.status(200).json({
    status: "error",
    message: "Please use /signup instead!",
  });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
};

exports.deleteUser = async (req, res) => {
  res.status(200).json({
    status: "error",
    message: "You do not have permission to delete users!",
  });
};
