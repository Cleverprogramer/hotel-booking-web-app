import React from "react";
import rightImg from "@/Images/about-hero-right.png";
import HomePageHeroSection from "@/components/Pages/Home/SectionHero";
import SectionHowItWork from "@/components/HowItWorks";
import SectionClientSay from "@/components/Pages/Home/ClientSay";
import BackgroundSection from "@/components/shared/BackgroundSection";
import SectionGridFeaturedRooms from "@/components/Pages/Home/FeaturedRooms/SectionGridFeaturedRooms";
import prisma from "@/utils/db";
import WelcomeSection from "../components/Pages/Home/WelcomeSection/WelcomeSection";

const HomePage = async () => {
  const data = await prisma.rooms.findMany();
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <HomePageHeroSection className="" />
        <WelcomeSection
          rightImg={rightImg}
          heading="WELCOME our hotel"
          btnText="Read more"
          href="/about"
          subHeading="Welcome to Jees Hotel, offering 72 luxuriously appointed rooms. Enjoy our complimentary gym for a wellness retreat and seamless laundry service for a stress-free stay. Arrive effortlessly with complimentary airport pickup, setting the tone for a warm welcome. On-site ATMs cater to your banking needs. As day turns to night, indulge in our rooftop restaurant with stunning views and a diverse menu."
        />
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
