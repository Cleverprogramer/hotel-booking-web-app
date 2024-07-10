import * as zod from "zod";

export const PasswordSchema = zod
  .object({
    currentPassword: zod
      .string()
      .min(3, { message: "Please enter your current password" }),
    newPassword: zod
      .string()
      .min(5, "Password must be at least 8 characters long"),
    confirmPassword: zod
      .string()
      .min(5, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Specify the path to report the error
  });
