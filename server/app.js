const express = require("express");

const tourRouter = require("./routes/tourRoutes");

// Start express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/tours", tourRouter);

module.exports = app;
