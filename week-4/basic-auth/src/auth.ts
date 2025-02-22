import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from ".";
import { authSchema, userCreateValidation, jwtPayload } from "./types";
import { UserService } from "./user";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = authSchema.parse(req.headers.authorization);
    const userDetails = jwt.verify(token, JWT_SECRET) as jwtPayload;
    const user = userCreateValidation.parse(UserService.getUserByToken(token));
    if (!user) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
    if (user.username != userDetails.username) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
};
