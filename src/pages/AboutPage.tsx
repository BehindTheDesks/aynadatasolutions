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
import aboutImage5 from "../assets/images/handshake.jpg";
import aboutImage6 from "../assets/images/server.jpg";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import FAQItem from "../components/FAQItem";
import Chip from "../components/Chip";

// Placeholder images - update these paths
// const aboutImage1 = "/images/about/team-dynamic.jpg";
// const aboutImage2 = "/images/about/creative-process.png";
// const aboutImage3 = "/images/about/office-vibe.jpg";
// const aboutImage4 = "/images/about/data-visualization-abstract.jpg"; // Another placeholder

function AboutPage() {
  return (
    <section className="relative bg-data-dark-bg min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Section1 />
        <div className="h-[50px] lg:h-0" />
        <Section2 />
        <div className="h-[50px] lg:h-[100px]" />

        <Section3 />
        <div className="h-[50px]" />
      </div>

      {/* Subtle Background Blobs (optional, similar to Hero if you like the effect) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-72 h-72 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 -z-0"></div>
    </section>
  );
}

export default AboutPage;

const Section1 = () => {
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

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
          className="text-base sm:text-lg md:text-xl text-data-text-muted font-light max-w-lg mx-auto lg:mx-0 lg:mt-10 leading-relaxed"
        >
          At AYNA, we help organizations unlock the full value of their data:
          from foundational governance to intelligent monetization.
        </motion.p>
      </AnimatedWrapper>
      {/* Right Column: Floating Images Area */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-2 lg:order-2 mt-5 lg:mt-0 pointer-events-none lg:pointer-events-auto">
        {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
        {/* Image 1 - Largest, slightly back */}

        <motion.div
          variants={fadeInUp(0.7, 0.2)}
          className="relative h-[50%] mb-3 "
        >
          <ImageSlider
            images={images}
            height="100%"
            dotPosition="right"
            direction="vertical"
            scrollInterval={4000}
          />
        </motion.div>

        <motion.div>
          <motion.p
            variants={fadeInUp(0.7, 0.2)} // Staggered delay
            className="text-base sm:text-lg md:text-xl text-data-text-muted font-light max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-center lg:text-left  "
          >
            We work with private businesses, public institutions, and
            development-focused entities across Nigeria and Africa to move data
            from being a passive resource to an active driver of growth, trust,
            and transformation
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

const Section2 = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Contextual Expertise",
      answer:
        "We understand the regulatory, cultural, and infrastructure realities that shape global institutions and we design around them, not despite them.",
    },

    {
      question: "End-to-End Capabilites",
      answer:
        "From governance frameworks to analytics platforms, talent pipelines to monetization models, we deliver across the full data value chain.",
    },

    {
      question: "Execution-Ready Thinking",
      answer:
        "We don't stop at insight. We work alongside your teams to drive implementation; aligning stakeholders, building capacity, and delivering results that stick.",
    },
    {
      question: "Ethical & Sustainable Design",
      answer:
        "Whether it's AI deployment or citizen data protection, we believe innovation must be responsible, inclusive, and built for the long term.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
      <div className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] order-2 lg:order-2 lg:mt-12 flex justify-center items-center">
        <motion.div
          variants={fadeInUp(0.7, 0)}
          className="max-w-xl mx-auto px-4 "
        >
          <motion.h1
            variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
            className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-center lg:mt-0 mt-16 text-data-text-main leading-tight tracking-tighter mb-6"
          >
            What sets us&nbsp;
            {/* <br className="hidden sm:block" /> */}
            <AnimatedHighlightedWord
              word="Apart"
              highlightColorClass="bg-yellow-200/50" // Example different highlight
              textColorClass="text-brand-yellow" // Ensure data-accent is defined
              className="mx-1"
            />
          </motion.h1>

          {questions?.map((question, index) => (
            <motion.div variants={fadeInUp(0.7, 0)}>
              <FAQItem
                key={index}
                question={question?.question}
                answer={question?.answer}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatedWrapper
        variants={staggerContainer(0.25, 0.1)}
        className="text-center flex flex-col justify-center lg:items-start items-center lg:text-left relative z-10 order-1 lg:order-1 py-8 lg:py-0"
      >
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center w-60 mb-8 md:mb-8"
        >
          <Chip
            // textSize="xl"
            bgColor="bg-yellow-300/40"
            textColor="text-brand-yellow"
            border={false}
            label="✨Why AYNA"
            className="text-base md:text-xl"
          />
        </AnimatedWrapper>
        <motion.h1
          variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
        >
          Where&nbsp;
          {/* <br className="hidden sm:block" /> */}
          <AnimatedHighlightedWord
            word="Strategy"
            highlightColorClass="bg-yellow-200/50" // Example different highlight
            textColorClass="text-brand-yellow" // Ensure data-accent is defined
            className="mx-1"
          />
          Meets&nbsp;
          <AnimatedHighlightedWord
            word="Impact"
            highlightColorClass="bg-yellow-200/50" // Example different highlight
            textColorClass="text-brand-yellow" // Ensure data-accent is defined
            className="mx-1"
          />
        </motion.h1>

        <motion.p
          variants={fadeInUp(0.7, 0.2)} // Staggered delay
          className="text-base sm:text-lg md:text-xl text-data-text-main max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
        >
          We&apos;re more than advisors; we&apos;re operators. With experience
          leading enterprise data initiatives across banking, government, and
          development sectors, we bring a rare mix of strategic thinking and
          execution muscle to every engagement.
        </motion.p>
        <div className="flex justify-center lg:justify-start ">
          <Button label="Reach Out Now" onClick={() => navigate("/contact")} />
        </div>
      </AnimatedWrapper>

      {/* Right Column: Floating Images Area */}
    </div>
  );
};

const Section3 = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
      <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0 pointer-events-none lg:pointer-events-auto">
        {/* Image 3 - Smaller, foreground */}
        <FloatingImage
          src={aboutImage5}
          alt="Modern office vibe"
          className="w-[70%] sm:w-[55%] md:w-[420px] lg:w-[420px] bottom-[10%] right-[5%] lg:right-[10%]  z-0"
          rotate={-3}
          floatDelay={0.5}
          // aspectRatio="aspect-[2/4]"
        />
        <FloatingImage
          src={aboutImage6}
          alt="Creative process sketches"
          className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] left-[15%] lg:left-[10%] z-20"
          rotate={8}
          floatDelay={0.3}
          aspectRatio="aspect-square"
        />
      </div>
      <AnimatedWrapper
        variants={staggerContainer(0.25, 0.1)}
        className="text-center flex flex-col justify-center lg:items-start items-center lg:text-left relative z-10 order-1 lg:order-1 py-8 lg:py-0"
      >
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center w-60 mb-8 md:mb-8"
        >
          <Chip
            // textSize="xl"
            bgColor="bg-yellow-300/40"
            textColor="text-brand-yellow"
            border={false}
            label="✨How We Work"
            className="text-base md:text-xl"
          />
        </AnimatedWrapper>
        <motion.h1
          variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
        >
          <AnimatedHighlightedWord
            word="Partnership"
            highlightColorClass="bg-white/50" // Example different highlight
            textColorClass="text-white" // Ensure data-accent is defined
            className="mx-1"
          />
          .
          <AnimatedHighlightedWord
            word="Precision"
            highlightColorClass="bg-yellow-200/50" // Example different highlight
            textColorClass="text-brand-yellow" // Ensure data-accent is defined
            className="mx-1"
          />
          .
          <AnimatedHighlightedWord
            word="Possibility"
            highlightColorClass="bg-white/50" // Example different highlight
            textColorClass="text-white" // Ensure data-accent is defined
            className="mx-1"
          />
          .
        </motion.h1>

        <motion.p
          variants={fadeInUp(0.7, 0.2)} // Staggered delay
          className="text-base sm:text-lg md:text-xl text-data-text-main max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
        >
          Every engagement begins with understanding your mission, your data,
          and your constraints. From there, we co- create a roadmap tailored to
          your goals, maturity level, and operating model.
          <br />
          <br />
          Whether you&apos;re launching a national data strategy or building
          your first analytics team, we meet you where you are and grow with you
        </motion.p>
        <div className="flex justify-center lg:justify-start ">
          <Button label="Reach Out Now" onClick={() => navigate("/contact")} />
        </div>
      </AnimatedWrapper>
      {/* Right Column: Floating Images Area */}
    </div>
  );
};
