"use server";

import { getBookingByRoomId, getRoomById } from "@/constants/getRoomById";
import { getUserByEmail } from "@/constants/getUserByEmail";
import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import { BookingSchema } from "@/schema/Booking";
import { IBooking } from "@/types/Booking";
import prisma from "@/utils/db";
import { stripe } from "@/utils/stripe";
import { wait } from "@/utils/wait";
import { Order } from "@prisma/client";

export const CreatePayment = async ({
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
    let order: Order | undefined = undefined;
    const existingOrder = await prisma.order.findFirst({
      where: {
        userId: session.id as string,
        roomsId: existingRoom.id,
      },
    });
    if (existingOrder) {
      order = existingOrder;
    } else {
      order = await prisma.order.create({
        data: {
          amount: price,
          userId: session.id as string,
          roomsId: existingRoom.id,
        },
      });
      
    }
    const product = await stripe.products.create({
      name: existingRoom.name,
      images: existingRoom.galleryImages,
      default_price_data: {
        currency: "USD",
        unit_amount: price * 100,
      },
    });

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/success?orderId=${order?.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/canceled`,
      payment_method_types: ["card"],
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["SO", "AE"] },
      metadata: {
        userId: session.id as string,
        roomId,
        guests,
        price,
        checkout,
        checking,
        nights,
        orderId: order?.id,
      },
      line_items: [{ price: product.default_price as string, quantity: 1 }],
    });
    return { url: stripeSession.url };
    return { success: "Your booking created!" };
  } catch (error: any) {
    return { error: error.message };
  }
};
