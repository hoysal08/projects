import express from "express"
// import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();

app.use(express.json());

const secret = process.env.JWT_SECRERT; // This should be in an environment variable in a real application
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
