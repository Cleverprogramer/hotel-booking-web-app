import AcountForm from "@/components/Pages/Acount/acountForm";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import prisma from "@/utils/db";
import React from "react";

const AcountPageComponent = async () => {
  const session = await useCurrentUser();
  const user: any = await prisma.user.findUnique({
    where: { email: session?.email as string },
    select: {
      id: true,
      email: true,
      name: true,
      gender: true,
      image: true,
      address: true,
      aboutYou: true,
      dateOfBrith: true,
      phoneNumber: true,
      username: true,
    },
  });
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Account infomation</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <AcountForm user={user} />
    </div>
  );
};

export default AcountPageComponent;
