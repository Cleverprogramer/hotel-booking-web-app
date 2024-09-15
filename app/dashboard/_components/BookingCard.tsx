import React, { FC } from "react";
import { Booking } from "@/types/Rooms";
import { GenUuid } from "@/utils/Uuid";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import BookingRoomsCard from "./BookingRoomCard";

export interface AcountBookingProps {
  data?: Booking[];
  gridClass?: string;
}

const AcountBooking: FC<AcountBookingProps> = ({ data, gridClass = "2" }) => {
  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${gridClass}`}>
        {data?.map((room) => (
          <BookingRoomsCard key={GenUuid()} data={room} />
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

export default AcountBooking;
