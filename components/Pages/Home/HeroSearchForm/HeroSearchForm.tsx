"use client";

import React, { FC } from "react";
import SearchFrom from "./SearchForm";

export type SearchRealEstateTab = "Buy" | "Rent" | "Sell";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchRealEstateTab;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}>
      <SearchFrom />
    </div>
  );
};

export default HeroSearchForm;
