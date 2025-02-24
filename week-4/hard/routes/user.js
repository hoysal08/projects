const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Todo } = require("../database");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  await User.create({
    email,
    password,
    name: username,
  });

  return  res.json({
    message: "You're signed In",
  });
});

router.post("/login", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const user = await User.findOne({
    email,
    password,
  });
  
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );
    return  res.json({
      token,
    });
  } else {
    return  res.status(401).json({
      message: "Incorrect creds",
    });
  }
});

// router.get("/todos", userMiddleware, async (req, res) => {
//   const todos = await Todo.find({
//     userId: req.userId,
//   });
//   res.json({ userId: req.userId, todos });
// });

// router.post("/logout", userMiddleware, (req, res) => {
//   // Implement logout logic
//   res.json({ userId: req.userId });
// });

module.exports = router;
