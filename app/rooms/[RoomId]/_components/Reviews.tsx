import prisma from "@/utils/db";
import { GenUuid } from "@/utils/Uuid";
import React from "react";

const Reviews = async () => {
  const data = await prisma.reviews.findMany({});
  return (
    <>
      {data.map((comment) => (
        <h1 key={GenUuid()}>{comment.comment}</h1>
      ))}
    </>
  );
};

export default Reviews;
