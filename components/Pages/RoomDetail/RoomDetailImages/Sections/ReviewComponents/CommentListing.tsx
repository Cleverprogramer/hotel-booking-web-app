import Avatar from "@/components/shared/Avatar";
import { IUser } from "@/types/User";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

interface CommentListingDataType {
  user: any;
  username: string;
  avatar?: string;
  createdAt: Date;
  comment: string;
  ratingCount: number;
}

export interface CommentListingProps {
  className?: string;
  data: CommentListingDataType;
  hasListingTitle?: boolean;
}

const CommentListing: FC<CommentListingProps> = ({
  className = "",
  data,
  hasListingTitle,
}) => {
  return (
    <div
      className={`nc-CommentListing flex space-x-4 ${className}`}
      data-nc-id="CommentListing">
      <div className="pt-0.5">
        <Avatar
          sizeClass="h-10 w-10 text-lg"
          radius="rounded-full"
          userName={!data.user.image ? data.username : ""}
          imgUrl={!data.user.image ? "" : data.user.image}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col">
            <div className="text-sm font-semibold">
              <span>{data.user.name}</span>
              {hasListingTitle && (
                <>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                    {` review in `}
                  </span>
                  <a href="/">The Lounge & Bar</a>
                </>
              )}
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {new Date(data.createdAt).toDateString()}
            </span>
          </div>
          <div className="flex text-yellow-500">
            {data.ratingCount === 1 ? (
              <StarIcon className="w-4 h-4" />
            ) : data.ratingCount === 2 ? (
              <>
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />
              </>
            ) : data.ratingCount === 3 ? (
              <>
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />
              </>
            ) : data.ratingCount === 4 ? (
              <>
                {" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />
              </>
            ) : data.ratingCount === 5 ? (
              <>
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />{" "}
                <StarIcon className="w-4 h-4" />
              </>
            ) : null}
          </div>
        </div>
        <span className="block mt-3 text-neutral-6000 dark:text-neutral-300">
          {data.comment}
        </span>
      </div>
    </div>
  );
};

export default CommentListing;
