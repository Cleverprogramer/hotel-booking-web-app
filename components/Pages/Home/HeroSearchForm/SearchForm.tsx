import { FC } from "react";

import GuestsInput from "./GuessInput";
import LocationInput from "./LocationInput";
import StayDatesRangeInput from "./StayDateRange";

export type TypeDropOffLocationType = "Early Check-In" | "Late Check-Out";
const SearchFrom: FC<{}> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px]  shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        {/* {renderRadioBtn()} */}
        <div className="flex flex-1 rounded-full">
          {/* <LocationInput className="flex-[]" /> */}
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <StayDatesRangeInput className="flex-1" />
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <GuestsInput className="flex-1" />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default SearchFrom;
