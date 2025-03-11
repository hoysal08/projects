import { z } from "zod";
export const adminAuthRequest = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username can't be empty" })
      .min(1)
      .max(30),
    password: z
      .string({ required_error: "password can't be empty" })
      .min(1)
      .max(30),
  }),
});
