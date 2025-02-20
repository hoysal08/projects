import {  z } from "zod";

export const userCreateValidation = z.object({
  username: z.string().min(1).max(30),
  password: z.string().min(1).max(30),
  token: z.union([z.string(), z.null()]).optional(),
});

export type User = z.infer<typeof userCreateValidation>;

export const authSchema = z.string().min(1, "Authorization token is required");
export const userJwtPayload = z.object({
  username: z.string(),
  iat: z.number(),
});
export type jwtPayload = z.infer<typeof userJwtPayload>
