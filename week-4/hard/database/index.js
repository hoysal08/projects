const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userAuth");

// Define schemas

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  salt: String
});

const TodoSchema = new mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, ref: "User"},
  title: String,
  done: Boolean,
  createdDate: Date,
  doneDate: Date
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  User,
  Todo,
};
