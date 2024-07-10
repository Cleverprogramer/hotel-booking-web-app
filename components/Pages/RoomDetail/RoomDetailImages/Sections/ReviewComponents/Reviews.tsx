import prisma from "@/utils/db";
import React from "react";
import ReviewSection from "../ReviewSection";

const Reviews = async ({ RoomId }: { RoomId: string }) => {
  const data = await prisma.reviews.findMany({
    where: { approved: true, roomsId: RoomId },
    orderBy: { createdAt: "desc" },
    include: { user: true },
  });

  return (
    <>
      <ReviewSection data={data} RoomId={RoomId} />
    </>
  );
};

export default Reviews;
