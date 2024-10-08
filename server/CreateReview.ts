"use server";

import { useCurrentUser } from "@/hooks/auth/server/useCurrentUser";
import { ReviewSchema } from "@/schema/CreateReview";
import prisma from "@/utils/db";

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const CreateReview = async (
  RoomId: string,
  reviewNumber: number,
  data: FormData
) => {
  try {
    const session = await useCurrentUser();
    const Data = data?.get("comment");
    const comment = { comment: Data };
    const ValidatingComment = ReviewSchema.safeParse(comment);

    if (!session?.email) {
      return { error: "unAuthorized please login first!" };
    }

    if (!session.image) {
      return { error: "please complete your profile!" };
    }

    if (ValidatingComment.success === false) {
      return { error: "Please add your review!" };
    }
    if (reviewNumber === 0) {
      return { error: "Choose your star review!" };
    }

    const Review = await prisma.reviews.create({
      data: {
        comment: ValidatingComment.data.comment,
        ratingCount: reviewNumber,
        username: session.username,
        roomsId: RoomId,
        userId: session.id as string,
      },
    });
    return { data: Review };

    // if (!ValidatingComment.success && reviewNumber) {
    //   return {
    //     error: "Please fill the form.",
    //   };
    // }
    // console.log(reviewNumber);
    // await sleep(1000);
    // await sleep(1000);
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};
