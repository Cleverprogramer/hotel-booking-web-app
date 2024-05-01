import { RoomsDataType } from "@/types/Rooms";
import prisma from "./db";

export const ValidateRoomById = async (roomId: string) => {
  const room: RoomsDataType | null = await prisma.rooms.findUnique({
    where: { id: roomId },
    include: { RoomCategory: true },
  });
  return room;
};

export const GetRoomById = async (RoomId: string): Promise<any> => {
  const CheckingRoom = await ValidateRoomById(RoomId);
  if (CheckingRoom) {
    return { data: CheckingRoom };
  } else {
    return { error: "Room not found" };
  }
};
