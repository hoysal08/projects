import { NextFunction } from "express";

const utils = {
  createRandomString: (length: number) =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length),
};

export default utils;
