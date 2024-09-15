"use server";

import { getBookingByRoomId, getRoomById } from "@/constants/getRoomById";
import { getUserByEmail } from "@/constants/getUserByEmail";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import { BookingSchema } from "@/schema/Booking";
import { IBooking } from "@/types/Booking";
import prisma from "@/utils/db";
import { generateRandomNumber } from "@/utils/GenerateRandomKey";
import { wait } from "@/utils/wait";

export const CreateBookingAction = async ({
  nights,
  checking,
  checkout,
  price,
  guests,
  roomId,
}: IBooking) => {
  const data = { nights, checking, checkout, price, guests, roomId };

  const session = await useCurrentUser();
  const validating = BookingSchema.safeParse(data);
  console.log(data);

  if (!validating.success) {
    return { error: "Please fill the form" };
  }

  if (!session?.email) {
    return { error: "unAuthorized please login first!" };
  }

  const existingUser = await getUserByEmail(session.email);

  if (!existingUser?.email) {
    return { error: "Email not found. Please sign up first." };
  }

  const existingRoom = await getRoomById(roomId);

  if (!existingRoom?.name) {
    return { error: "no room please book existing room." };
  }

  const existingBooking = await getBookingByRoomId(existingRoom.id);

  if (existingBooking?.roomsId === roomId) {
    return { error: "you've already booked this room" };
  }

  await wait(1000);

  try {
    const booking = await prisma.booking.create({
      data: {
        checking: validating.data.checking,
        checkout: validating.data.checkout,
        nights: validating.data.nights,
        price: validating.data.price,
        guests: validating.data.guests,
        roomsId: existingRoom.id as string,
        userId: existingUser.id,
        bookingCode: generateRandomNumber(),
      },
    });
    return { success: "Your booking created!" };
  } catch (error: any) {
    return { error: error.message };
  }
};
