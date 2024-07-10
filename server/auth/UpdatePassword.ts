"use server";

import { getUserByEmail } from "@/constants/getUserByEmail";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import { PasswordSchema } from "@/schema/Password";
import { wait } from "@/utils/wait";
import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";

export const UpdatePassword = async (data: z.infer<typeof PasswordSchema>) => {
  const session = await useCurrentUser();
  const checking = PasswordSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  if (!session?.email) {
    return { error: "unAuthorized please login first!" };
  }

  const existingUser = await getUserByEmail(session.email);

  if (!existingUser?.email) {
    return { error: "User not found!" };
  }

  const { currentPassword, confirmPassword, newPassword } = checking.data;

  wait(1000);

  const passwordMatch = await bcrypt.compare(
    currentPassword,
    existingUser.password as string
  );

  if (!passwordMatch) {
    return { error: "CurrentPassword incorrect!" };
  }

  const hashingPassword = await bcrypt.hash(newPassword, 10);

  try {
    const updatePassword = await prisma.user.update({
      where: { email: existingUser.email },
      data: { password: hashingPassword },
    });
    return { success: "Your password was updated!" };
  } catch (error: any) {
    return { error: error.message };
  }
};
