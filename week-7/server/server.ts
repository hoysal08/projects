import express from "express"
// import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import dotenv from "dotenv"
import adminRouter from "./controller/admin.controller";
dotenv.config();
const app = express();

app.use(express.json());

const secret = process.env.JWT_SECRERT; // This should be in an environment variable in a real application
const port = process.env.PORT;
app.use("/admin", adminRouter)
app.listen(port, () => {
  if(!process.env.BCRYPT_ROUNDS){
    process.exit(1)
  }
  console.log("Server is listening on port 3000");
});
