const mongoose = require("mongoose");
const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database");
const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const title = req.body.title;
    if (title) {
      await Todo.create({
        userId: req.userId,
        title,
        done: false,
        createdDate: new Date(),
      });
      return res.status(200).send();
    } else {
      return res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/", adminMiddleware, async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
});

router.delete("/", adminMiddleware, async (req, res, next) => {
  try {
    await Todo.deleteMany({});
    return res.status(200).send();
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", adminMiddleware, async (req, res, next) => {
  try {
    const todoId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(new mongoose.Types.ObjectId(todoId))) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }
    if (todoId) {
      await Todo.deleteOne({ _id: todoId });
      return res.status(200).send();
    } else {
      return res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/", adminMiddleware, async (req, res, next) => {
  try {
    return res.status(200).json({
      todos: await Todo.find({}, {}, { limit: 10 }).populate("userId"),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", adminMiddleware, async (req, res, next) => {
  try {
    const todoId = req.params.id;
    if (todoId) {
      const todo = await Todo.findById(todoId).populate("userId");
      return res.status(200).json({ todo });
    } else {
      return res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/updateDone/:id", async (req, res, next) => {
  try {
    const todoId = req.params.id;
    if (todoId) {
      const todo = await Todo.findByIdAndUpdate(
        todoId,
        { done: true, doneDate: new Date() },
        { new: true }
      );
      return res.status(200).json({ todo });
    } else {
      return res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
