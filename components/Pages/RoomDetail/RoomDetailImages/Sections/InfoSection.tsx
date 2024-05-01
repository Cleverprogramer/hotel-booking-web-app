import StartRating from "@/components/Pages/Home/FeaturedRooms/StartRating";
import Badge from "@/components/shared/Badge";
import React from "react";
import LikeSaveBtns from "../LikeSaveButton";
import Avatar from "@/components/shared/Avatar";
import { RoomsDataType } from "@/types/Rooms";

interface InfoSectionProps {
  // id: string;
  name: string;
  // desc: string;
  // featuredImage: string;
  // galleryImages: string[];
  // price: number;
  bedrooms: number;
  baths: number;
  guests: number;
  // saleOff: string;
  reviews: number;
  sizeInMeter: string;
  RoomCategory: {
    id: string;
    name: string;
  };
  // roomCategoryId: any;
}

const InfoSection = ({
  RoomCategory: { name: RoomCategoryId },
  name,
  guests,
  bedrooms,
  baths,
  sizeInMeter,
  reviews,
}: InfoSectionProps) => {
  return (
    <div className="listingSection__wrap !space-y-6">
      {/* 1 */}
      <div className="flex justify-between items-center">
        <Badge name={RoomCategoryId} />
        <LikeSaveBtns />
      </div>

      {/* 2 */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{name}</h2>

      {/* 3 */}
      <div className="flex items-center space-x-4">
        <StartRating point={reviews} />
        <span>·</span>
        <span>
          <i className="las la-map-marker-alt"></i>
          <span className="ml-1"> Hargeisa, Somaliland</span>
        </span>
      </div>

      {/* 4 */}

      {/* 5 */}
      <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

      {/* 6 */}
      <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex items-center space-x-3 ">
          <i className=" las la-user text-2xl "></i>
          <span className="">
            {guests} <span className="hidden sm:inline-block">guests</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className=" las la-bed text-2xl"></i>
          <span className=" ">
            {bedrooms} <span className="hidden sm:inline-block">beds</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className=" las la-bath text-2xl"></i>
          <span className=" ">
            {baths} <span className="hidden sm:inline-block">baths</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="  las la-expand-arrows-alt text-2xl"></i>
          <span className=" ">
            <span className="hidden sm:inline-block">{sizeInMeter}m2</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
