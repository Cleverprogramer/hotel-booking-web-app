import prisma from "@/utils/db";
import React from "react";

const Reviews = async () => {
  const data = await prisma.reviews.findMany({});
  return (
    <>
      {data.map((comment) => (
        <h1>{comment.comment}</h1>
      ))}
    </>
  );
};

export default Reviews;
