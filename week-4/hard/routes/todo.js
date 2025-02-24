const mongoose = require("mongoose");
const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database");
const router = Router();
// todo Routes
router.post("/", async (req, res) => {
  const title = req.body.title;
  if (title) {
    await Todo.create({
      userId: req.userId,
      title,
      done: false,
    });
    return res.status(200).send();
  } else {
    return res.status(400).json({ message: "Invalid Request" });
  }
});

router.put("/", adminMiddleware, async (req, res) => {
  const todoId = req.body.todoId;
  const updatedTitle = req.body.updatedTitle;
  if (todoId && updatedTitle) {
    await Todo.findByIdAndUpdate(todoId, {
      title: updatedTitle,
    });
    return res.status(200).send();
  } else {
    return res.status(400).json({ message: "Invalid Request" });
  }
});

router.delete("/", adminMiddleware, async (req, res) => {
  await Todo.deleteMany({});
  return res.status(200).send();
});

router.delete("/:id", adminMiddleware, async (req, res) => {``
  const todoId = req.params.id
  if (!mongoose.Types.ObjectId.isValid(new mongoose.Types.ObjectId(todoId))) {
    return res.status(400).json({ message: "Invalid Todo ID" });
  }
  if (todoId) {
    await Todo.deleteOne({ _id: todoId });
    return res.status(200).send();
  } else {
    return res.status(400).json({ message: "Invalid Request" });
  }
});

router.get("/", adminMiddleware, async (req, res) => {
  return res.status(200).json({
    todos: await Todo.find({}, {}, { limit: 10 }),
  });
});

router.get("/:id", adminMiddleware, async (req, res) => {
  const todoId = req.params.id;
  if (todoId) {
    const todo = await Todo.findById(todoId);
    return res.status(200).json({ todo });
  } else {
    return res.status(400).json({ message: "Invalid Request" });
  }
});

module.exports = router;
