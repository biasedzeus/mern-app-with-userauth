//Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Models
const User = require("./models/user.model");

const app = express();

//MiddleWares
app.use(cors());
app.use(express.json());
// express.json() is middleware used to let know express
// that to pasre the req body in json.

//Mongoose

mongoose.connect("mongodb://localhost:27017/mern-stack");

app.get("/", (res, req) => {
  console.log("Home Visited...!!!");
});

app.get("/hello", (req, res) => {
  res.send("hello World");
});

app.post("/api/user/register", async (req, res) => {
  console.log(req.body);

  try {
    const newPassword = await bcrypt.hash(req.body.pass, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    // password: req.body.pass,
  });

  if (!user) {
    return { status: "error", error: "Invalid Login" };
  }

  const isPasswordValid = await bcrypt.compare(req.body.pass, user.password);

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret1234"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret1234");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: "invalid token" });
  }
});

//To create a qoute

app.post("/api/quote", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret1234");
    const email = decoded.email;
    await User.updateOne({ email: email }, { $set: { qoute: req.body.quote } });
    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

app.listen(3300, () => {
  console.log("Listening At Port 3300");
});
