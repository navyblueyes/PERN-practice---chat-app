const express = require("express");

const app = express();

const port = 3000;

app.get("/home", (req, res) => {
  return res.send("home screen");
});

app.get("/login", (req, res) => {
  return res.send("login screen");
});

app.listen(port, () => {
  console.log(`server listenting on port ${port}`);
});

console.log("hello world");
