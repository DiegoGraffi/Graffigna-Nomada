const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("listening on port ", PORT));

app.use(express.static("public"));

app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("./index");
});

app.get("/productDetail", (req, res) => {
  res.render("./productDetail");
});

app.get("/cart", (req, res) => {
  res.render("./cart");
});

app.get("/register", (req, res) => {
  res.render("./register");
});

app.get("/login", (req, res) => {
  res.render("./login");
});
