const multer = require("multer");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const AppError = require("../utils/appError");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let userType;
    userType = `${req.user.role}s`;
    cb(null, `public/img/${userType}`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
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

exports.uploadUserPhoto = upload.single("photo");

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

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateMe = (Model) =>
  catchAsync(async (req, res, next) => {
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new AppError(
          "This route is not for password updates. Please use /updateMyPassword",
          400
        )
      );
    }

    const filteredBody = filterObj(req.body, "firstName", "lastName");
    if (req.file) filteredBody.photo = req.file.filename;

    const updatedDoc = await Model.findByIdAndUpdate(
      req.user._id,
      filteredBody,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedDoc,
    });
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
