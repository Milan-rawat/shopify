const express = require("express");

const userRouter = require("./routes/userRoutes");

// Start express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/users", userRouter);

module.exports = app;
