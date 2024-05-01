import prisma from "@/utils/db";
import React from "react";
import ReviewSection from "../ReviewSection";

const Reviews = async ({ RoomId }: { RoomId: string }) => {
  console.log(RoomId);
  const data = await prisma.reviews.findMany({
    where: { approved: true, roomsId: RoomId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <ReviewSection data={data} RoomId={RoomId} />
    </>
  );
};

export default Reviews;
