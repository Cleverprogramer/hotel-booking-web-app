import React from "react";
import SectionHero from "./SectionHero";
import rightImg from "@/Images/about-hero-right.png";
import SectionClientSay from "@/components/Pages/Home/ClientSay";
import NewsLatter from "@/components/shared/NewsLater";
import BgGlassmorphism from "@/components/BgGlassMorphism";

const AboutPage = () => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="Experience a haven of comfort and luxury in the heart of Hargeisa. At Jees Hotel, we’re dedicated to providing you with an unforgettable stay that combines modern amenities with warm hospitality."
        />
        <div className="relative py-16">
          <SectionClientSay />
        </div>
        <NewsLatter />
      </div>
    </div>
  );
};

export default AboutPage;
