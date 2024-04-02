import React from "react";
import HomePageHeroSection from "@/components/Pages/Home/SectionHero";
import SectionHowItWork from "@/components/HowItWorks";
import SectionClientSay from "@/components/Pages/Home/ClientSay";
import BackgroundSection from "@/components/shared/BackgroundSection";

const HomePage = () => {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <HomePageHeroSection className="" />
        <SectionHowItWork />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
