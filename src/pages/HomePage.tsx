// src/pages/HomePage.tsx
import React from "react";
import HeroDataAnalytics from "../components/HeroDataAnalytics";
import AboutSection from "../components/AboutSection";
import TechServicesSection from "../components/TechServicesSection";
import GlobalNetworkSection from "../components/GlobalNetworkSection";
import BriefSection from "../components/BriefSection";
import SolutionsSection from "../components/SolutionsSection";
import BuildWith from "../components/BuildWith";


function HomePage() {

  return (
    <>
      <HeroDataAnalytics /> {/* Use the new Hero */}
      <AboutSection /> {/* Add the new section */}

      <TechServicesSection />
      
      <BriefSection/>
      {/* <GlobalNetworkSection />  */}
      <div className="pt-20 lg:pt-0">
      <BuildWith/>

      </div>
      <SolutionsSection/>
      <div className="h-[300px] w-full"></div>
      {/* <PortfolioSectionV2 /> 
      <ServicesSection/>

       <FloatingWhatsAppButton 

          message={prefilledMessage}
        /> */}
    </>
  );
}

export default HomePage;
