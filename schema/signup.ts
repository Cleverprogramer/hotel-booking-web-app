import * as z from "zod";

export const SingupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, {
    message: "password must be at least 5 characters",
  }),
});
