const express = require("express");

require("dotenv").config();

const app = express();

app.get("/home", (req, res) => {
  return res.send("home screen");
});

app.get("/login", (req, res) => {
  return res.send("login screen");
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server listenting on port ${port}`);
});

console.log("hello world");
