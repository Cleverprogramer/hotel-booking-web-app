import * as zod from "zod";

export const BookingSchema = zod.object({
  checking: zod.string(),
  checkout: zod.string(),
  guests: zod.number().min(1, { message: "Must have at least 1 guest" }),
  roomId: zod.string(),
  nights: zod.number().min(1, { message: "Must have at least 1 night" }),
  price: zod.number().min(1, { message: "Price is required." }),
});
