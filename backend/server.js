const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require('./models/user.model')

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
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err)
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.pass,
  });

  if(user){
      return res.json({status:'ok',user: true})
  }
  else{
      return res.json({status:'error',user: false})

  }
});

app.listen(3300, () => {
  console.log("Listening At Port 3300");
});
