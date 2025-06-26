// src/components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Your scroll animation wrapper
import { fadeInUp, staggerContainer } from "./animations/variants"; // Your animation variants

import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import GridPattern from "./GridPattern";

import FloatingImage from "./FloatingImage";
import aboutImage1 from "../assets/images/team-dynamic.jpg";
import aboutImage2 from "../assets/images/creative-process.jpg";
import aboutImage3 from "../assets/images/office-vibe.jpg";
import aboutImage4 from "../assets/images/data-visualization-abstract.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Chip from "./Chip";

const staticTextPartVariant = fadeInUp(0.7);

function BriefSection() {
  const navigate = useNavigate();
  const briefList = [
    
    {
      id:1,
      text:"Policy innovation through data"
    },
        {
      id:2,
      text:"Responsible AI for the public good"
    },

           {
      id:3,
      text:"Data monetization playbooks"
    },
               {
      id:4,
      text:"Talent, ethics, and inclusion in the data economy"
    },
  ]
  

  

  return (
    <section
      id="brief"
      className="py-16 bg-data-dark-bg relative overflow-hidden"
    >
      <GridPattern />

      {/* Optional subtle background grid pattern */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className=" text-center lg:px-48"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter "
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>The</motion.span>

            <AnimatedHighlightedWord
              word="AYNA"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={staticTextPartVariant}>Brief</motion.span>
          </motion.h1>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 mt-16 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1   lg:py-0"
          >
            <motion.h3 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-2xl sm:text-5xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>
                {" "}
                Insights That Drive Data-Led &nbsp;
              </motion.span>

              <AnimatedHighlightedWord
                word="Transformation"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />
            </motion.h3>

            <p className="text-data-text-muted text-base sm:text-xl leading-relaxed mb-8">
              Our thought leadership platform explores what&apos;s next for data,
              governance, AI, and transformation in Africa.
            </p> 

            {/* <motion.div variants={fadeInUp(0.7, 0.1)} className="grid grid-col-1 md:grid-cols-2 gap-7">
              {
                briefList?.map((brief, id) => (
                  <div key={id} className="h-[10px] bg-tech-card-bg backdrop-blur-md border border-tech-card-border 
                  rounded-card-tech p-6 sm:p-8 shadow-card-tech-main max-w-[25rem]
                  flex flex-col justify-center items-center overflow-hidden group text-center text-sm
                  transition-all duration-300 ease-out hover:shadow-brand-yellow/50 hover:border-white/20  ">
                      <div
        className={`absolute inset-0 bg-brand-yellow/10  opacity-30  group-hover:opacity-50 transition-opacity duration-300 -z-10`}
      ></div>
                    {brief?.text}
                  </div>
                ))
              }
            </motion.div> */}

            <div className="w-full pt-9 flex md:justify-start justify-center">
              <Button
                size="lg"
                label="Visit The AYNA Brief"
                onClick={() => navigate("/about")}
              />
            </div>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2  pointer-events-none lg:pointer-events-auto">
            {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
            {/* Image 1 - Largest, slightly back */}
            <FloatingImage
              src={aboutImage1}
              alt="Dynamic team working"
              className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] top-[25%] left-[15%] lg:left-[10%] z-0"
              rotate={-5}
              floatDelay={0.1}
              aspectRatio="aspect-[4/3]"
            />
            {/* Image 2 - Medium, middle ground */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BriefSection;
