import React, { FC } from "react";
import Link from "next/link";
import { Booking, RoomsDataType } from "@/types/Rooms";
import Badge from "@/components/shared/Badge";
import ButtonLikeIcon from "@/components/shared/Button/ButtonLikeIcon";
import GallerySlider from "@/components/Pages/Home/FeaturedRooms/GellerySlider";
import SaleOffBadge from "@/components/Pages/Home/FeaturedRooms/SaleOfBadge";
import StartRating from "@/components/Pages/Home/FeaturedRooms/StartRating";

export interface BookingRoomsCardProps {
  className?: string;
  data?: Booking;
  size?: "default" | "small";
}
const BookingRoomsCard: FC<BookingRoomsCardProps> = ({
  size = "default",
  className = "",
  data,
}) => {
  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard_${data?.id}`}
          ratioClass="aspect-w-4 aspect-h-3 "
          galleryImgs={data?.room.galleryImages as []}
          href={`/rooms/${data?.id}`}
          galleryClass={size === "default" ? undefined : ""}
        />
        <ButtonLikeIcon
          isLiked={true}
          className="absolute right-3 top-3 z-[1]"
        />
        {data?.saleOff && (
          <SaleOffBadge
            desc={data?.saleOff}
            className="absolute left-3 top-3"
          />
        )}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="space-y-3">
          <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <i className=" las la-bed text-2xl"></i>
              <span className="hidden sm:inline-block">
                {data?.room?.bedrooms} beds
              </span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-3">
              <i className=" las la-bath text-2xl"></i>
              <span className=" ">
                {data?.room?.baths}{" "}
                <span className="hidden sm:inline-block">baths</span>
              </span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-3">
              <i className=" las la-expand-arrows-alt text-11"></i>
              <span className=" ">
                <span className="hidden sm:inline-block">
                  {data?.room?.sizeInMeter}m2
                </span>
              </span>
            </div>
          </span>
          <div className="flex items-center space-x-2">
            {true && <Badge name color="green" />}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === "default" ? "text-base" : "text-base"
              }`}>
              <span className="line-clamp-1">{data?.room.name}</span>
            </h2>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            {data?.price}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /night
              </span>
            )}
          </span>
          {!!data?.room?.reviews && <StartRating point={data?.room?.reviews} />}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={`/rooms/${data?.id}`}>{renderContent()}</Link>
    </div>
  );
};

export default BookingRoomsCard;
