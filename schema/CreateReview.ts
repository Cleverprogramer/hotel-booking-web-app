import * as zod from "zod";

export const ReviewSchema = zod.object({
  comment: zod.string().min(30),
});
