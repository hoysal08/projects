import mongoose from "mongoose";

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});
const User = mongoose.model("User", userSchema);
