"use server";

import { SingupSchema } from "@/schema/signup";
import { wait } from "@/utils/wait";
import { z } from "zod";

export const SingupUser = async (data: z.infer<typeof SingupSchema>) => {
  const checking = SingupSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  wait(1000);

  return { success: "Welcome to your account" };
};
