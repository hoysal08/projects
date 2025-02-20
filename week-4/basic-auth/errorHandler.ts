import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error)
  res.status(500).send({ error: JSON.parse(error.message)
   });
};
