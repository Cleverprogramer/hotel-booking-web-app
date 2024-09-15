import prisma from "@/utils/db";
import AcountBooking from "../../_components/BookingCard";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";

const AccountSavelists = async () => {
  const session = await useCurrentUser();
  const data:any = await prisma.booking.findMany({
    where: { userId: session?.id as string },
    include: { room: true },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Your bookings</h2>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      <AcountBooking data={data} />
    </div>
  );
};

export default AccountSavelists;
