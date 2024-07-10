"use server";

import { getUserByEmail } from "@/constants/getUserByEmail";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import { AcountSchema } from "@/schema/Acount";
import prisma from "@/utils/db";
import { wait } from "@/utils/wait";
import { z } from "zod";

export const UpdateAcount = async (data: z.infer<typeof AcountSchema>) => {
  const session = await useCurrentUser();
  const checking = AcountSchema.safeParse(data);

  if (!checking.success) {
    return { error: "Please fill the form" };
  }

  if (!checking.data.profileImageUrl) {
    return { error: "Please upload profile imag." };
  }

  if (!session?.email) {
    return { error: "unAuthorized please login first!" };
  }

  const existingUser = await getUserByEmail(checking.data.email);

  if (!existingUser?.email) {
    return { error: "Email not found. Please sign up first." };
  }

  wait(1000);

  const updateAcount = await prisma.user.update({
    where: { email: existingUser.email as string },
    data: {
      name: checking.data.name,
      username: checking.data.username,
      gender: checking.data.gender as "male" | "female",
      image: checking.data.profileImageUrl,
      aboutYou: checking.data.aboutYou,
      address: checking.data.address,
      phoneNumber: checking.data.phoneNumber,
      dateOfBrith: checking.data.dateOfBrith,
    },
  });

  return { success: "Your acount updated successfully!" };
};
