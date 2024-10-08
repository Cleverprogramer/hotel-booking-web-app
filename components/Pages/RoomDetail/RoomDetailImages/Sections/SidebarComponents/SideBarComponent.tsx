"use client";
import StartRating from "@/components/Pages/Home/FeaturedRooms/StartRating";
import GuestsInput from "@/components/Pages/Home/HeroSearchForm/GuessInput";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import React from "react";
import { useDateStore } from "@/hooks/useStore";
import { DateFormating } from "@/utils/DateFormating";
import { useCustomerNight } from "@/hooks/UseCustomerNight";
import SidebarStayDatesRangeInput from "./StayDatesRangeInput";

const SideBarComponent = () => {
  const CustomerNight = useCustomerNight((state) => state.SetCustomerNight);
  const CheckIn = useDateStore((state) => state.CheckIn);
  const CheckOut = useDateStore((state) => state.CheckOut);

  if (CheckIn && CheckOut) {
    const Days = DateFormating({ CheckIn, CheckOut });
    CustomerNight(Days);
  }

  return (
    <div className="listingSectionSidebar__wrap shadow-xl">
      <div className="flex justify-between">
        <span className="text-3xl font-semibold">
          $119
          <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
            /night
          </span>
        </span>
        <StartRating />
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
          <span>$119 x 3 night</span>
          <span>$357</span>
        </div>
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          <span>Service charge</span>
          <span>$0</span>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$199</span>
        </div>
      </div>

      {/* SUBMIT */}
      <ButtonPrimary href={"/checkout"}>Book now</ButtonPrimary>
    </div>
  );
};

export default SideBarComponent;
