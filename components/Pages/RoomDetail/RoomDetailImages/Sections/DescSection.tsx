import React from "react";

const DescSection = ({
  stayInfo,
  desc,
}: {
  stayInfo: string;
  desc: string;
}) => {
  return (
    <div className="listingSection__wrap">
      <h2 className="text-2xl font-semibold">Room information</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="text-neutral-6000 dark:text-neutral-300">
        <span>{stayInfo}.</span>
        <br />
        <br />
        <span>{desc}</span>
        <br />
      </div>
    </div>
  );
};

export default DescSection;
