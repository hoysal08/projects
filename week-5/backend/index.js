const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");
const authenticateUser  = require("./middleware/user");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/todo", authenticateUser, todoRouter);

connectToDatabase().then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
