const express = require("express");
const { Todo } = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      res.status(400).json({ message: "Invalid Request" });
    }
    const todo = await Todo.create({
      title,
      userId: req.userId,
      completed: false,
    });
    res.status(200).json({ todo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create todo", err });
  }
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.status(200).json({ todos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get todo", err });
  }
});

router.put("/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params; 
    const { title, completed } = req.body;
    if (!todoId || !title ) {
     return  res.status(400).json({ message: "Invalid Request" });
    }
    const todo = await Todo.findByIdAndUpdate(todoId, {title, completed}, {new: true})
    res.status(200).json({ todo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update todo" });
  }
});
module.exports = router;
