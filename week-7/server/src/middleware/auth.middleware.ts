import jwt from "jsonwebtoken"
import { SystemError } from "../schema/error.schema.js";

export const authMiddleware = (req: any, res: any, next: any) => {
  // validate the token is valid and add userId to req
  const token = req.get("token");
  if (!process.env.JWT_SECRET) {
    return res.status(500).send("JWT_SECRET is not defined");
  }
  const userId = jwt.verify(token, process.env.JWT_SECRET);
  if (userId) {
    req.userId = userId;
    next();
  }
  throw new SystemError("UnAuthorized", 401)
};