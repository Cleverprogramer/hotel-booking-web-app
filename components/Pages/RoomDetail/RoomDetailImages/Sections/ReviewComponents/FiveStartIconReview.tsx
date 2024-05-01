"use client";

import { useReview } from "@/hooks/UseReview";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC, useEffect } from "react";
import { useState } from "react";

export interface FiveStartIconForReviewProps {
  className?: string;
  iconClass?: string;
  defaultPoint?: number;
}

const FiveStartIconForReview: FC<FiveStartIconForReviewProps> = ({
  className = "",
  iconClass = "w-4 h-4",
  defaultPoint = 5,
}) => {
  const SetReviewNumber = useReview((state) => state.SetReviewNumber);
  const [point, setPoint] = useState(defaultPoint);
  const [currentHover, setCurrentHover] = useState(0);

  useEffect(() => {
    setPoint(defaultPoint);
  }, [defaultPoint]);

  const HandleOnclick = (item: number) => {
    setPoint(() => item);
    SetReviewNumber(item);
  };

  return (
    <div
      className={`nc-FiveStartIconForRate flex items-center text-neutral-300 ${className}`}
      data-nc-id="FiveStartIconForRate">
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <StarIcon
            key={item}
            className={`${
              point >= item || currentHover >= item ? "text-yellow-500" : ""
            } ${iconClass}`}
            onMouseEnter={() => setCurrentHover(() => item)}
            // onMouseLeave={() => setCurrentHover(() => 0)}
            onClick={() => HandleOnclick(item)}
          />
        );
      })}
    </div>
  );
};

export default FiveStartIconForReview;
