import prisma from "@/utils/db";

export const getRoomById = async (roomId: string) => {
  const room = await prisma.rooms.findUnique({ where: { id: roomId } });
  return room;
};

export const getBookingByRoomId = async (roomId: string) => {
  const booking = await prisma.booking.findFirst({
    where: { roomsId: roomId },
  });
  return booking;
};
