const express = require("express");
const router = express.Router();
const { User } = require("../db");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Invalid Request" });
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(403)
        .json({ message: "User already exists with this username" });
    }

    const newUser = await User.create({
      username,
      password,
    });
    return res.status(200).json({ user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Try again later" });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Invalid Request" });
  }
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({ message: "Invalid Credentials " });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Try again later" });
  }
});

module.exports = router;
