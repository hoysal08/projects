import mongoose from "mongoose";
// Connect to MongoDB
const initDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/coursify")
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};

export default initDB;
