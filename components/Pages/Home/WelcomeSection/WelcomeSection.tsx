import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import WelcomeGallerySlider from "./WelcomeGallerySlider";
import { GenUuid } from "@/utils/Uuid";

export interface WelcomeSectionProps {
  className?: string;
  rightImg: StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
  href: string;
}

const WelcomeSection: FC<WelcomeSectionProps> = ({
  className = "",
  rightImg,
  heading,
  href,
  subHeading,
  btnText,
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`}>
      <div className="flex flex-col justify-between lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href={href}>{btnText}</ButtonPrimary>}
        </div>
        <div
          className={`nc-StayCard2 group relative w-full h-[25rem] ${className}`}>
          <WelcomeGallerySlider
            uniqueID={`StayCard_${GenUuid()}`}
            ratioClass="rounded"
            className="rounded-xl"
            galleryImgs={[
              "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=600",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
