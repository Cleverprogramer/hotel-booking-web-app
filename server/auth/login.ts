"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/constants/getUserByEmail";
import { DefaultRedirectUrl } from "@/routes";
import { LoginSchema } from "@/schema/Login";
import { wait } from "@/utils/wait";
import { AuthError } from "next-auth";
import { z } from "zod";

export const LoginUser = async (data: z.infer<typeof LoginSchema>) => {
  const checking = LoginSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  const { email, password } = checking.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "user not found" };
  }

  wait(1000);

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DefaultRedirectUrl,
    });
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
