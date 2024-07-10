"use client";
import StartRating from "@/components/Pages/Home/FeaturedRooms/StartRating";
import GuestsInput from "@/components/Pages/Home/HeroSearchForm/GuessInput";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import React from "react";
import SidebarStayDatesRangeInput from "./SidebarComponents/StayDatesRangeInput";
import { useDateStore } from "@/hooks/useStore";
import { DateFormating } from "@/utils/DateFormating";
import { useCustomerNight } from "@/hooks/UseCustomerNight";
import SidebarBookButton from "./SidebarComponents/SidebarBookButton";
import { CreateBookingAction } from "@/server/CreateBooking";
import { usePathname } from "next/navigation";
import { IBooking } from "@/types/Booking";
import toast from "react-hot-toast";

const Sidebar = ({
  price,
  reviews,
  nights,
}: {
  nights: number;
  price: number;
  reviews: number;
}) => {
  const pathname = usePathname();

  const SetCustomerNight = useCustomerNight((state) => state.SetCustomerNight);
  const CustomerNight = useCustomerNight((state) => state.CustomerNight);
  const CheckIn: string = useDateStore((state) => state.CheckIn);
  const CheckOut: string = useDateStore((state) => state.CheckOut);
  const guests = useDateStore((state) => state.Guests);

  if (CheckIn && CheckOut) {
    const Days = DateFormating({ CheckIn, CheckOut });
    SetCustomerNight(Days);
  }

  const CreateBookingaction = async (formdata: IBooking) => {
    const CreateReviewUpdated = CreateBookingAction.bind(null);
    const result = await CreateReviewUpdated(formdata);

    if (result?.error) {
      toast.error(result.error as string);
      return;
    }
    if (result?.success) {
      toast.success(result.success);
    }
  };
  return (
    <div className="listingSectionSidebar__wrap shadow-xl">
      <div className="flex justify-between">
        <span className="text-3xl font-semibold">
          ${price}
          <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
            /night
          </span>
        </span>
        <StartRating point={reviews} />
      </div>

      {/* FORM */}
      <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
        <SidebarStayDatesRangeInput className="flex-1 z-[11]" />
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        <GuestsInput className="flex-1" />
      </form>

      {/* SUM */}
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          <span>
            ${price} x {nights} night
          </span>
          <span>${Math.trunc(price * nights)}</span>
        </div>
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          <span>Service charge</span>
          <span>$0</span>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${Math.trunc(price * nights)}</span>
        </div>
      </div>

      {/* SUBMIT */}
      <form
        action={() =>
          CreateBookingaction({
            checking: CheckIn,
            checkout: CheckOut,
            guests,
            nights,
            price,
            roomId: pathname.split("/rooms/")[1],
          })
        }>
        <SidebarBookButton />
      </form>
    </div>
  );
};

export default Sidebar;
