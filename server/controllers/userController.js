const User = require("../models/userModel");
const Seller = require("../models/sellerModel");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const AppError = require("../utils/appError");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.emailVerification = (Model) =>
  catchAsync(async (req, res, next) => {
    if (!req.body.email) {
      return next(
        new AppError("Please provide email to send Verification Link!", 400)
      );
    }
    const doc = await Model.findOne({ email: req.body.email });
    if (!doc) {
      return next(new AppError("No User found with that email!", 400));
    }

    const verificationToken = doc.createToken();
    await doc.save({ validateBeforeSave: false });

    try {
      const URL = `${req.protocol}://${req.get("host")}/api/v1/${
        doc.role
      }s/emailConfirmation/${verificationToken}`;

      await new Email(doc, URL).sendVerification();

      res.status(200).json({
        status: "success",
        message: "Verification Link has sent to your email!",
      });
    } catch (err) {
      console.log("ERROR", err);
      doc.emailConfirmationToken = undefined;
      doc.emailConfirmationExpires = undefined;
      await doc.save({ validateBeforeSave: false });

      return next(
        new AppError(
          "There was an error Sending Link to your email. Try again later!"
        ),
        500
      );
    }
  });

exports.deleteMe = (Model) =>
  catchAsync(async (req, res, next) => {
    await Model.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find({});

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res) => {
    res.status(200).json({
      status: "error",
      message: "Please use /signup instead!",
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: updatedDoc,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res) => {
    res.status(200).json({
      status: "error",
      message: "You do not have permission to delete users!",
    });
  });
