import prisma from "@/utils/db";

export const getUserByEmail = async (email: string) => {
  const ExistingUser = await prisma.user.findUnique({ where: { email } });
  return ExistingUser;
};
