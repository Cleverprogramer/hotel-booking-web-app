"use client";
import { ListingGalleryImage } from "@/types/GalleryImage";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import InfoSection from "./RoomDetailImages/Sections/InfoSection";
import DescSection from "./RoomDetailImages/Sections/DescSection";
import Sidebar from "./RoomDetailImages/Sections/Sidebar";
import ThingsToKnow from "./RoomDetailImages/Sections/ThingsToKnow";
import { useDateStore } from "@/hooks/useStore";
import { useCustomerNight } from "@/hooks/UseCustomerNight";
import { RoomsDataType } from "@/types/Rooms";
import SectionAmentities from "./RoomDetailImages/Sections/Amentities";

interface IRoomComponents {
  data: RoomsDataType;
  children: React.ReactNode;
}

export const Photos = [
  "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
export const imageGallery: ListingGalleryImage[] = [...Photos].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);

const RoomDetailPageComponent = ({ data, children }: IRoomComponents) => {
  const CheckIn = useDateStore((state) => state.CheckIn);
  const CheckOut = useDateStore((state) => state.CheckOut);
  const Guests = useDateStore((state) => state.Guests);
  const CustomerNight = useCustomerNight((state) => state.CustomerNight);
  const Router = useRouter();
  const PathName = usePathname();

  const handleOpenModalImageGallery = () => {
    Router.push(`${PathName}/?modal=Room_Photos` as string);
  };

  return (
    <div className="nc-ListingStayDetailPage">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}>
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={data.featuredImage}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {data.galleryImages
            .filter((_, i) => i >= 1 && i < 5)
            .map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}>
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image
                    fill
                    className="object-cover rounded-md sm:rounded-xl "
                    src={item || ""}
                    alt=""
                    sizes="400px"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={handleOpenModalImageGallery}
                />
              </div>
            ))}

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}>
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </header>
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10 pb-10">
          <InfoSection
            RoomCategory={data.RoomCategory}
            guests={data.guests}
            name={data.name}
            bedrooms={data.bedrooms}
            baths={data.baths}
            sizeInMeter={data.sizeInMeter}
            reviews={data.reviews}
          />
          <DescSection desc={data.desc} stayInfo={data.stayInfo} />
          <SectionAmentities
            desc="About the room's amenities and services"
            isOpen={false}
            number={6}
            title="Room Facilities"
          />
          <ThingsToKnow />

          {children}
        </div>
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0 pb-10">
          <div className="sticky top-28">
            <Sidebar
              nights={CustomerNight}
              price={data.price}
              reviews={data.reviews}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomDetailPageComponent;
