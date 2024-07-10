import prisma from "@/utils/db";

export const getUserByEmail = async (email: string) => {
  const ExistingUser = await prisma.user.findUnique({ where: { email } });
  return ExistingUser;
};

export const getUserById = async (id: string) => {
  const ExistingUser = await prisma.user.findUnique({ where: { id } });
  return ExistingUser;
};
