const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");
const userMiddleware = require("./middleware/user");
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/healthy", (req, res) => res.send("I am Healthy"));


app.use("/", userRouter);
app.use(userMiddleware)
app.use("/todo",todoRouter)
app.use((err, req, res, next) => {
  console.error("Error:", err); 

  res.status(500).json({
    message: "Internal Server Error", 
    error: err.message, 
  });
});

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
