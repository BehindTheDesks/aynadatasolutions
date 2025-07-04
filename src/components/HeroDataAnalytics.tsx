// src/components/HeroDataAnalytics.tsx
import React from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper";
import { fadeInUp, staggerContainer } from "./animations/variants";
import FloatingDataObject, {
  DataCircleDots,
  DataBarSegments,
  DataConcentricCircles,
  DataPillShape,
} from "./data-objects/FloatingDataObject";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import GridPattern from "./GridPattern";
import { FiArrowRight } from "react-icons/fi";
import worldMoneyData from "../assets/images/world-money-data.jpg";
import africa from "../assets/images/home-africa.jpg";
import humanAi from "../assets/images/human-ai.jpg";
import farmerAuto from "../assets/images/farmer-auto.jpg";
import dataWoman from "../assets/images/data-woman.jpg";
import dataTransform from "../assets/images/data-transform.jpg";
import dataMarket from "../assets/images/data-Market.jpg"





// ... (headline splitting logic remains the same)
const staticTextPartVariant = fadeInUp(0.7);

function HeroDataAnalytics() {
  const navigate = useNavigate();

  return (
    <section
      id="hero-data"
      className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36 md:pb-10"
    >
      {" "}
      {/* Adjusted padding for overall balance */}
      <GridPattern />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-12 items-center">
          {" "}
          {/* Adjusted gap-x */}
          {/* Text Content Area - now takes full width on mobile, half on lg */}
          <AnimatedWrapper
            variants={staggerContainer(0.2, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0 lg:pb-24"
          >
            <motion.div variants={fadeInUp(0.6)} className="mb-4">
              <span className="inline-block bg-data-secondary/20 text-data-secondary text-sm sm:text-lg font-semibold px-3 py-1 rounded-full">
                ✨ DATA-DRIVEN RESULTS
              </span>
            </motion.div>

            <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>Turn </motion.span>
              <AnimatedHighlightedWord
                word="Data "
                highlightColorClass="bg-[#0d8234]/50" // Example different highlight
                textColorClass="text-brand-green"
                className="mx-1"
              />
              <motion.span variants={staticTextPartVariant}>Into </motion.span>
              <br />
              <AnimatedHighlightedWord
                word="Value. "
                highlightColorClass="bg-yellow-200/50" // Example different highlight
                textColorClass="text-brand-yellow"
                className="mx-1"
              />

              <motion.span variants={staticTextPartVariant}>
                &nbsp; At{" "}
              </motion.span>
              <AnimatedHighlightedWord
                word="Scale. "
                highlightColorClass="bg-yellow-200/50" // Example different highlight
                textColorClass="text-brand-yellow"
                className="mx-1"
              />

              {/* <motion.span variants={staticTextPartVariant}>Drive Decisions </motion.span> */}
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)}
              className="text-base sm:text-lg  text-data-text-muted max-w-md mx-auto lg:mx-0 mb-8"
            >
              We partner with leading organizations across Africa to transform
              data into a strategic advantage through governance, analytics,
              talent, and AI.
            </motion.p>

            <motion.div
              className="w-full flex justify-center flex-col lg:flex-row gap-8 lg:justify-start items-center lg:items-start"
              variants={fadeInUp(0.7, 0.3)}
            >
              <Button label="Let’s Talk" onClick={() => navigate("/contact")} />
              <Button
                label="Explore Our Work"
                backgroundColor="bg-brand-yellow"
                textColor="text-data-text-main"
                onClick={() => navigate("/services")}
              />
            </motion.div>
          </AnimatedWrapper>
          {/* Floating Data Objects Area - DESKTOP (lg screens and up) */}
          <div className="relative hidden lg:block h-[450px] md:h-[550px] lg:h-[650px] order-1 lg:order-2">
            {" "}
            {/* Order change for flex layout */}
            {/* ... (Your existing 10+ FloatingDataObject components for desktop - keep them as they are) ... */}
            <FloatingDataObject
              floatDelay={0.1}
              className="top-[0%] left-[5%]"
              initialX={-60}
              initialY={-20}
            >
              <DataCircleDots size="w-32 h-32" imageSrc={worldMoneyData}>
              </DataCircleDots>

              
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.3}
              className="top-[35%] -left-[5%]"
              initialY={60}
              initialX={-30}
            >
              
              <DataCircleDots
                size="w-60 h-24 sm:w-72 sm:h-28"
                imageSrc={africa}
              >
              </DataCircleDots>
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.2}
              className="top-[10%] right-[10%]"
              initialX={60}
              initialY={-30}
            >
              <DataCircleDots
                size="w-28 h-44 sm:w-32 sm:h-52"
                imageSrc={humanAi}
              >
              </DataCircleDots>
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.5}
              className="top-[30%] left-[45%] transform -translate-x-1/2"
              initialY={-40}
            >
              <DataCircleDots
                size="w-28 h-44 sm:w-32 sm:h-52"
                imageSrc={farmerAuto}
              >
              </DataCircleDots>
              <DataConcentricCircles
                size="w-28 h-28 sm:w-32 sm:h-32"
                colorClass="border-data-primary opacity-60"
              />
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.7}
              className="bottom-[5%] right-[5%]"
              initialY={60}
              initialX={40}
            >

              <DataCircleDots
                size="w-28 h-44 sm:w-32 sm:h-52"
                imageSrc={dataWoman}
              >
              </DataCircleDots>
              <DataCircleDots
                size="w-24 h-24 sm:w-28 sm:h-28"
                colorClass="bg-data-accent opacity-70"
              />
            </FloatingDataObject>
            
            <FloatingDataObject
              floatDelay={0.6}
              className="top-[60%] left-[20%]"
              initialY={30}
            >
                 <DataCircleDots
                size="w-28 h-44 sm:w-32 sm:h-52"
                imageSrc={dataTransform}
              >
              </DataCircleDots>
            
            </FloatingDataObject>
            
            <FloatingDataObject
              floatDelay={0.9}
              className="top-[-4%] right-[40%]"
              initialY={-20}
            >
                  <DataCircleDots
                size="w-28 h-44 sm:w-32 sm:h-52"
                imageSrc={dataMarket}
              >
              </DataCircleDots>
              {/* <DataConcentricCircles
                size="w-20 h-20"
                colorClass="border-data-secondary opacity-40"
              /> */}
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={1.0}
              className="bottom-[15%] left-[5%]"
              initialY={40}
            >
              <DataCircleDots
                size="w-16 h-16"
                colorClass="bg-data-primary opacity-60"
              />
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.35}
              className="top-[70%] right-[30%]"
              initialX={20}
              initialY={-10}
            >
              <DataPillShape
                width="w-32"
                height="h-16"
                colorClass="bg-gray-300 opacity-40"
              />
            </FloatingDataObject>
          </div>
          {/* Floating Data Objects Area - MOBILE (screens smaller than lg) */}
          {/* This container will be positioned relative to the main grid cell or the page if needed */}
          {/* For mobile, we might want these objects to be part of the same grid cell as text, but positioned absolutely around it */}
          <div className="absolute inset-0 block lg:hidden z-0 pointer-events-none">
            {" "}
            {/* Full area, behind text, only on mobile */}
            <FloatingDataObject
              floatDelay={0.2}
              className="top-[5%] left-[5%] opacity-50"
              initialX={-30}
              initialY={-20}
            >
                      <DataCircleDots
                size="w-20 h-20"
                imageSrc={dataMarket}
              >
              </DataCircleDots>
           
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.4}
              className="top-[15%] right-[5%] opacity-50"
              initialX={30}
              initialY={-15}
            >

                          <DataCircleDots
                size="w-28 h-12"
                imageSrc={humanAi}
              >
              </DataCircleDots>
        
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.6}
              className="bottom-[10%] left-[10%] opacity-50"
              initialY={30}
              initialX={-20}
            >

                       <DataCircleDots
                size="w-16 h-24"
                imageSrc={dataWoman}
              >
              </DataCircleDots>
         
            </FloatingDataObject>
            <FloatingDataObject
              floatDelay={0.8}
              className="bottom-[5%] right-[8%] opacity-50"
              initialY={25}
              initialX={20}
            >

                   <DataCircleDots
                size="w-24 h-24"
                imageSrc={africa}
              >
              </DataCircleDots>
          
            </FloatingDataObject>
          </div>
        </div>
      </div>
      {/* Subtle Background Blobs (same as before, keep them for overall depth) */}
      {/* <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-data-primary/5 rounded-full filter blur-2xl opacity-50 -z-0"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-data-secondary/5 rounded-full filter blur-2xl opacity-50 -z-0"></div> */}
    </section>
  );
}

export default HeroDataAnalytics;
