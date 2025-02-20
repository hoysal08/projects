import { z } from "zod";

export const userCreateValidation = z.object({
    username: z.string().min(1).max(30),
    password: z.string().min(1).max(30),
    token: z.union([z.string(), z.null()]).optional(),
  });
  
export type User = z.infer<typeof userCreateValidation>;