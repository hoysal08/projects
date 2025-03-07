import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  // adminSchema here
});

const Admin = mongoose.model("Admin", adminSchema);
