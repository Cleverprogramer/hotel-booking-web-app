"use server";

import { LoginSchema } from "@/schema/Login";
import { wait } from "@/utils/wait";
import { z } from "zod";

export const LoginUser = async (data: z.infer<typeof LoginSchema>) => {
  const checking = LoginSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  wait(1000);

  return { success: "Welcome to your account" };
};
