import React, { FC, ReactNode } from "react";
import { RoomsDataType } from "@/types/Rooms";
import FeaturedRoomsCard from "./FeaturedRoomsCard";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import { GenUuid } from "@/utils/Uuid";

export interface SectionGridFeaturedRoomsProps {
  data?: RoomsDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  tabs?: string[];
}

const SectionGridFeaturedRooms: FC<SectionGridFeaturedRoomsProps> = ({
  data,
  gridClass = "2",
  heading = "Featured rooms to book",
  subHeading = "Popular rooms to stay that our hotel recommends for you",
  tabs = ["Single", "Deluxe", "Triple", "Vip"],
}) => {
  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"Vip"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${gridClass}`}>
        {data?.map((room) => (
          <FeaturedRoomsCard key={GenUuid()} data={room} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary disabled loading>
          Show me more
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturedRooms;
