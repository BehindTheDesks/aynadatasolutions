// src/pages/AboutPage.tsx (or src/components/AboutPage.tsx)
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../components/animations/variants"; // Adjust path
import AnimatedHighlightedWord from "../components/AnimatedHighlightedWord"; // Adjust path
import { AnimatedWrapper } from "../components/AnimatedWrapper"; // Adjust path
import FloatingImage from "../components/FloatingImage";
import aboutImage1 from "../assets/images/africa-ai.jpg";
import aboutImage2 from "../assets/images/world-net.jpg";
import aboutImage3 from "../assets/images/charts.jpg";
import aboutImage4 from "../assets/images/rural-modern.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

// Placeholder images - update these paths
// const aboutImage1 = "/images/about/team-dynamic.jpg";
// const aboutImage2 = "/images/about/creative-process.png";
// const aboutImage3 = "/images/about/office-vibe.jpg";
// const aboutImage4 = "/images/about/data-visualization-abstract.jpg"; // Another placeholder

function AboutPage() {

  return (
    <section className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Section1/>
      <Section2/>
      <Section3/>
    

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laboriosam aspernatur. Porro quae blanditiis aut architecto distinctio corrupti esse deleniti quia dicta impedit laudantium cumque, ipsum ducimus iure quidem totam modi incidunt sit odio eos laborum? Vel iure numquam minus.</p>
      </div>

      {/* Subtle Background Blobs (optional, similar to Hero if you like the effect) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
    </section>
  );
}

export default AboutPage;

const Section1 = () => {

    const images = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4,
  ];

  return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left lg:h-[600px]  relative z-10 order-1 lg:order-1 "
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              About&nbsp;
              <AnimatedHighlightedWord
                word="AYNA "
                highlightColorClass="bg-yellow-300/50" // Example different highlight
                textColorClass="text-brand-yellow" // Ensure data-accent is defined
                className="mx-1"
              />
            </motion.h1>
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              <AnimatedHighlightedWord
                word="Clarity"
                highlightColorClass="bg-white/50" // Example different highlight
                textColorClass="text-white" // Ensure data-accent is defined
                className="mx-1"
              />
              .
              <AnimatedHighlightedWord
                word="Context"
                highlightColorClass="bg-yellow-200/50" // Example different highlight
                textColorClass="text-brand-yellow" // Ensure data-accent is defined
                className="mx-1"
              />
              .
              <AnimatedHighlightedWord
                word="Execution"
                highlightColorClass="bg-white/50" // Example different highlight
                textColorClass="text-white" // Ensure data-accent is defined
                className="mx-1"
              />
              .
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-muted font-light max-w-lg mx-auto lg:mx-0  leading-relaxed"
            >
              At AYNA, we help organizations unlock the full value of their
              data: from foundational governance to intelligent monetization.
          
            </motion.p>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-2 lg:order-2 mt-5 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
            {/* Image 1 - Largest, slightly back */}

            <div className="relative h-[50%] mb-3 ">
 <ImageSlider images={images}  height="100%" dotPosition="right"  direction="vertical"   scrollInterval={4000}  />
              

            </div>
            
            <div>
                <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-muted font-light max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-center lg:text-left  "
            >
               We work with private businesses, public institutions, and
              development-focused entities across Nigeria and Africa to move
              data from being a passive resource to an active driver of growth,
              trust, and transformation
            </motion.p>
            </div>
          </div>
        </div>

  )
}


const Section2 = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-1 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            {/* Image 3 - Smaller, foreground */}
            <FloatingImage
              src={aboutImage3}
              alt="Modern office vibe"
              className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] bottom-[10%] left-[15%] lg:left-[10%] z-0"
              rotate={-3}
              floatDelay={0.5}
              // aspectRatio="aspect-[2/4]"
            />
            <FloatingImage
              src={aboutImage2}
              alt="Creative process sketches"
              className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] right-[5%] lg:right-[10%] z-20"
              rotate={8}
              floatDelay={0.3}
              aspectRatio="aspect-square"
            />
          </div>
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-2 py-8 lg:py-0"
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              What is our
              <br className="hidden sm:block" />
              <AnimatedHighlightedWord
                word="Mission? "
                highlightColorClass="bg-brand-green/50" // Example different highlight
                textColorClass="text-brand-green" // Ensure data-accent is defined
                className="mx-1"
              />
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-main max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              To design and deliver scalable, ethical, and impact-driven
              solutions that help institutions govern smarter, grow sustainably,
              and compete globally.
            </motion.p>
            <div className="flex justify-center lg:justify-start ">
              <Button
                label="Reach Out Now"
                onClick={() => navigate("/contact")}
              />
            </div>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
        </div>

  )
}

const Section3 = () => {
  const navigate = useNavigate();

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            {/* Image 3 - Smaller, foreground */}
            <FloatingImage
              src={aboutImage3}
              alt="Modern office vibe"
              className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] bottom-[10%] right-[5%] lg:right-[10%]  z-0"
              rotate={-3}
              floatDelay={0.5}
              // aspectRatio="aspect-[2/4]"
            />
            <FloatingImage
              src={aboutImage2}
              alt="Creative process sketches"
              className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] left-[15%] lg:left-[10%] z-20"
              rotate={8}
              floatDelay={0.3}
              aspectRatio="aspect-square"
            />
          </div>
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1 py-8 lg:py-0"
          >
            <motion.h1
              variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              What&apos;s in <br className="hidden sm:block" /> our{" "}
              <AnimatedHighlightedWord
                word=" Future? "
                highlightColorClass="bg-[#FFD700]/50" // Example different highlight
                textColorClass="text-[#FFD700]" // Ensure data-accent is defined
                className="mx-1"
              />
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.7, 0.2)} // Staggered delay
              className="text-base sm:text-lg md:text-xl text-data-text-main max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              To be Africa&apos;s premier partner for unlocking value through
              data, people, and intelligent technology.
            </motion.p>
            <div className="flex justify-center lg:justify-start ">
              <Button
                label="Reach Out Now"
                onClick={() => navigate("/contact")}
              />
            </div>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
        </div>

  )
}