import React from "react";
import HomePageHeroSection from "@/components/Pages/Home/SectionHero";
import SectionHowItWork from "@/components/HowItWorks";
import SectionClientSay from "@/components/Pages/Home/ClientSay";
import BackgroundSection from "@/components/shared/BackgroundSection";
import SectionGridFeaturedRooms from "@/components/Pages/Home/FeaturedRooms/SectionGridFeaturedRooms";
import prisma from "@/utils/db";

const HomePage = async () => {
  const data = await prisma.rooms.findMany();
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <HomePageHeroSection className="" />
        <SectionGridFeaturedRooms data={data} />
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
