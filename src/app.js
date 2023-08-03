const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("listening on port ", PORT));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/cart.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
