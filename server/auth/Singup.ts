"use server";

import { getUserByEmail } from "@/constants/getUserByEmail";
import { SingupSchema } from "@/schema/signup";
import prisma from "@/utils/db";
import { wait } from "@/utils/wait";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const SingupUser = async (data: z.infer<typeof SingupSchema>) => {
  const checking = SingupSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  const { email, password } = checking.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  wait(1000);

  try {
    const createUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    return { success: "Your account created successfully!" };
  } catch (error: any) {
    return { error: error?.message };
  }
};
