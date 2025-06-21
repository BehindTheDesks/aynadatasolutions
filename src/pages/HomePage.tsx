// src/pages/HomePage.tsx
import React from "react";
import HeroDataAnalytics from "../components/HeroDataAnalytics";
import AboutSection from "../components/AboutSection";
import TechServicesSection from "../components/TechServicesSection";
import GlobalNetworkSection from "../components/GlobalNetworkSection";
import BriefSection from "../components/BriefSection";


function HomePage() {

  return (
    <>
      <HeroDataAnalytics /> {/* Use the new Hero */}
      <TechServicesSection />
      <AboutSection /> {/* Add the new section */}
      <BriefSection/>
      <GlobalNetworkSection /> {/* Add the new section */}
      {/* <PortfolioSectionV2 /> 
      <ServicesSection/>

       <FloatingWhatsAppButton 

          message={prefilledMessage}
        /> */}
    </>
  );
}

export default HomePage;
