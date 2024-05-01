"use server";

import { IBooking } from "@/types/Booking";

export const CreateBooking = async ({
  nights,
  checking,
  checkout,
  price,
  guests,
}: IBooking) => {
  new Promise((resolve) => setTimeout(resolve, 3003330));
  console.log(nights, checking, checkout, price, guests);
};
