const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.status(200).send("<h1>Hello from the server!</h1>");
});

module.exports = app;
