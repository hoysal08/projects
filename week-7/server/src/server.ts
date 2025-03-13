import express, { NextFunction, Request, Response } from "express";
import initDB from "./db/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRouter from "./controller/admin.controller.js";
dotenv.config();
const app = express();

app.use(express.json());

const secret = process.env.JWT_SECRET;
const port = process.env.PORT;
app.use("/admin", adminRouter);
initDB();

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  res.status(err.status).json(err);
});
app.listen(port, () => {
  if (!process.env.BCRYPT_ROUNDS) {
    process.exit(1);
  }
  console.log("Server is listening on port 3000");
});
