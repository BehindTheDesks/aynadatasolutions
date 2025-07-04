// src/components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Your scroll animation wrapper
import {
  fadeInUp,
  staggerContainer,
} from "./animations/variants"; // Your animation variants

import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import GridPattern from "./GridPattern";

import FloatingImage from "./FloatingImage";
import aboutImage2 from "../assets/images/creative-process.jpg";
import aboutImage3 from "../assets/images/office-vibe.jpg";
import aboutImage4 from "../assets/images/data-visualization-abstract.jpg";
import automationImage from "../assets/images/automation-image-1.jpg";

import Button from "./Button";
import { useNavigate } from "react-router-dom";




const staticTextPartVariant = fadeInUp(0.7);

function AboutSection() {
  const navigate = useNavigate()

  return (
    <section
      id="about-us"
      className="py-16 bg-data-dark-bg relative overflow-hidden mt-14"
    >
      <GridPattern />

      {/* Optional subtle background grid pattern */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center lg:px-48"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>Why&nbsp;</motion.span>

            <AnimatedHighlightedWord
              word="AYNA"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={staticTextPartVariant}>?</motion.span>
          </motion.h1>
        </AnimatedWrapper>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2  py-8 lg:py-0"
          >
            <motion.h3 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-2xl sm:text-5xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>
                {" "}
                Turning&nbsp;
              </motion.span>

              <AnimatedHighlightedWord
                word="Complexity"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />

              <motion.span variants={staticTextPartVariant}>&nbsp;Into</motion.span>
              <br className="md:hidden"/>
              <AnimatedHighlightedWord
                word="Clarity,"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />

              <motion.span variants={staticTextPartVariant}>
                Together.
              </motion.span>
            </motion.h3>

            <p className="text-data-text-muted text-base sm:text-xl leading-relaxed mb-8">
      We don’t just hand over reports or frameworks, we walk the journey with you.
      <br/>
      <br/>

At AYNA, we partner deeply with transformation leaders across Africa to navigate complexity, build internal
capacity, and deliver outcomes that matter. Whether it&apos;s unlocking new revenue streams, improving public trust, or
building your AI foundation, we&apos;re in it for the long term. You bring the mission. We bring the data clarity to power it.
            </p>
            <div className="w-full flex lg:justify-start justify-center">

              <Button
              size="lg"
                label="Learn About Our Approach"
                onClick={() => navigate("/about")}
              />
            </div>


          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1   pointer-events-none lg:pointer-events-auto">
            {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
            {/* Image 1 - Largest, slightly back */}
            <FloatingImage
              src={automationImage}
              alt="Dynamic team working"
              className="w-[60%] sm:w-[55%] md:w-[280px] lg:w-[320px] top-[5%] left-[10%] lg:left-[5%] z-10"
              rotate={-5}
              floatDelay={0.1}
              aspectRatio="aspect-[4/3]"
            />
            {/* Image 2 - Medium, middle ground */}
            <FloatingImage
              src={aboutImage2}
              alt="Creative process sketches"
              className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] right-[5%] lg:right-[10%] z-20"
              rotate={8}
              floatDelay={0.3}
              aspectRatio="aspect-square"
            />
            {/* Image 3 - Smaller, foreground */}
            <FloatingImage
              src={aboutImage3}
              alt="Modern office vibe"
              className="w-[40%] sm:w-[35%] md:w-[200px] lg:w-[220px] bottom-[10%] left-[25%] lg:left-[20%] z-30"
              rotate={-3}
              floatDelay={0.5}
              aspectRatio="aspect-[3/4]"
            />
            {/* Image 4 - Small accent image */}
            <FloatingImage
              src={aboutImage4}
              alt="Abstract data visualization"
              className="w-[30%] sm:w-[25%] md:w-[160px] lg:w-[180px] top-[65%] right-[20%] lg:right-[25%] z-0 opacity-80" // Behind others
              rotate={12}
              floatDelay={0.2}
              aspectRatio="aspect-video"
            />
          </div>
        </div>
 
      </div>
    </section>
  );
}

export default AboutSection;
