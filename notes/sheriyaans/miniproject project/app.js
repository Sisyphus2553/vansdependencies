require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");
const postModel = require("./models/post");

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || "shhhhhhhhh";
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { username, email, password, age, name } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.render("index");

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      let user = await userModel.create({
        username,
        name,
        email,
        password: hash,
        age,
      });

      res.cookie("token", jwt.sign({ email, userid: user._id }, JWT_SECRET));
      res.redirect("profile");
    });
  });
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email }).populate("posts");
  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  if (!post.likes.includes(req.user.userid)) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }
  await post.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  res.render("edit", { post });
});

app.post("/upload", multer().single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  await postModel.findOneAndUpdate({ _id: req.params.id }, { content: req.body.content });
  res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;
  let post = await postModel.create({ user: user._id, content });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.send("Something went wrong");
  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      res.cookie("token", jwt.sign({ email, userid: user._id }, JWT_SECRET));
      res.redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (!req.cookies.token) return res.send("You must be logged in");
  try {
    req.user = jwt.verify(req.cookies.token, JWT_SECRET);
    next();
  } catch (err) {
    return res.send("Invalid token");
  }
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
