import { auth } from "@/auth";

export const useCurrentUser = async () => {
  const user = await auth();
  return user?.user;
};
