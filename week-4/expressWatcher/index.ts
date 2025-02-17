import utils from "./utils";
import express, { Request, Response, NextFunction } from "express";
import fs from "fs/promises";

const app = express();

app.use(express.json());
const WRITE_LOG_FILE = false;

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

const httpLogger = async (req: Request, res: Response, next: NextFunction) => {
  const requestData = JSON.stringify(
    {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      ipV4: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      logTime: new Date(),
    },
    null,
    2
  );
  if (WRITE_LOG_FILE) {
    await fs.writeFile(`./${utils.createRandomString(10)}.txt`, requestData);
  }
  console.log("Request logged:", requestData);
  next();
};

app.use(asyncHandler(httpLogger));

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(3001, () => console.log("Server running on port 3001"));
