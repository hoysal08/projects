import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
  published: { type: Boolean, required: true },
});

const Course = mongoose.model("Course", courseSchema);
