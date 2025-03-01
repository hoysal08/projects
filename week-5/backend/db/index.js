const { default: mongoose, Schema } = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to db: ", process.env.MONGO_URI);
  } catch (err) {
    console.log("failed to connect to database error: ", err);
    process.exit(1);
  }
};

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});
const TodoSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  title: String,
  completed: Boolean
});

const User = mongoose.model("User", userSchema)
const Todo = mongoose.model("Todo", TodoSchema)

module.exports = {
  connectToDatabase,
  User,
  Todo,
}