import { SomalilandCities } from "@/data/Cities";
import { ExtractingCityFromAddress } from "@/utils/ExtractingFromAddress";
import * as zod from "zod";

export const AcountSchema = zod.object({
  name: zod
    .string()
    .trim()
    .min(4, { message: "Name must contain at least 4 character(s)" }),
  gender: zod.string(),
  username: zod
    .string()
    .min(4, { message: "Username must contain at least 4 character(s)" })
    .regex(/^@/, "Username must start with @"),
  email: zod.string().email(),
  dateOfBrith: zod.string().date(),
  address: zod
    .string()
    .min(5, {
      message: "Address must contain at least 5 character(s)",
    })
    .refine(
      (address) => {
        const city = ExtractingCityFromAddress(address).toLowerCase();
        return SomalilandCities.includes(city);
      },
      {
        message: "Enter a valid city, capital city, or village in Somaliland",
      }
    ),
  phoneNumber: zod
    .string()
    .min(1, {
      message: "phone number is required",
    })
    .regex(/^\+252\s?(?:63|65|67)\s?\d{7}$/, "Invalid phone number format"),
  aboutYou: zod
    .string()
    .min(30, { message: "About you must contain at least 30 character(s)" })
    .refine((value) => {
      // Check for excessive repetition of characters
      const consecutiveRepeats = /(.)\1{3,}/; // Matches if a character is repeated 4 or more times consecutively
      return !consecutiveRepeats.test(value);
    }, "Avoid excessive repetition of characters"),
  profileImageUrl: zod.string().optional(),
});
