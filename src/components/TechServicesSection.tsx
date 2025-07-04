// src/components/TechServicesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper";
import { fadeInUp, staggerContainer } from "./animations/variants";

// Example Icons from react-icons/fi (Feather Icons) - replace with your choices
import { FiShield } from "react-icons/fi";
import GridPattern from "./GridPattern";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import { FaChess, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiArtificialIntelligence, GiStumpRegrowth } from "react-icons/gi";
import { LiaLightbulb } from "react-icons/lia";
import Chip from "./Chip";
import ServiceCard, { type Service } from "./ServiceCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";

const size = 100;

// --- Example Service Data ---
const techServicesData: Service[] = [
  {
    id: "policy",
    title: "Data governance, privacy, & quality",
    description:
      "Craft robust frameworks for data management, ensuring compliance, interoperability, & trust across institutions.",
    IconComponent: <FiShield size={size} className="text-blue-500" />,
    bgColor: "bg-blue-200/10",
    // visualElement: <CustomPrivacyVisual />, // If you have a more complex visual
    spanCols: 1, // Example: this card takes 1 column
    className: "hover:shadow-blue-500/50 hover:border-white/20",
  },
  {
    id: "ai",
    title: "Advanced analytics & AI ",
    description:
      "Leverage predictive modeling, machine learning, & enterprise AI to drive smarter decisions & automation.",
    IconComponent: (
      <GiArtificialIntelligence size={size} className="text-purple-300" />
    ),
    bgColor: "bg-purple-300/10",
    className: "hover:shadow-purple-300/50 hover:border-white/20",
    spanCols: 1, // This card could span 2 columns if its visual is wide: lg:col-span-2
    spanRows: 1, // This card could span 2 rows if its visual is tall: lg:row-span-2
  },
  {
    id: "monetization",
    title: "Data monetization frameworks",
    description:
      "Unlock revenue through licensing, marketplaces, & efficiency-driven models tailored for public & private sectors.",
    bgColor: "bg-brand-green/10",
    IconComponent: (
      <FaRegMoneyBillAlt size={size} className="text-brand-green" />
    ),
    className: "hover:shadow-brand-green/50 hover:border-white/20",
    spanCols: 1,
  },

  {
    id: "strategy",
    title: "Strategy consulting",
    description:
      "Align vision, innovate business models, & execute with precision through ecosystem mapping & stakeholder engagement.",
    IconComponent: <FaChess size={size} className="text-white" />,
    bgColor: "bg-white/10",
    className: "hover:shadow-white/50 hover:border-white/20 w-full",

    spanCols: 1, // This card will span two columns on large screens
  },

  {
    id: "capacity",
    title: "Capacity building ",
    description:
      "Empower your team with data stewardship certifications, & tailored digital transformation training.",
    IconComponent: <GiStumpRegrowth size={size} className="text-red-500" />,
    bgColor: "bg-purple-500/10",
    className: "hover:shadow-red-300/50 hover:border-white/20",

    // Example of a different visual - subtle background lines
    // visualElement: (
    //     <div className="w-full h-full relative overflow-hidden">
    //         <FiZap size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-accent-glow opacity-20 animate-glow-pulse" />
    //         {/* Subtle circuit lines */}
    //         {[...Array(5)].map((_, i) => (
    //             <motion.div
    //                 key={i}
    //                 className="absolute h-px bg-tech-accent-glow/30"
    //                 initial={{ width: 0, left: `${20 + i*10}%` }}
    //                 animate={{ width: `${30 + Math.r&om()*30}%` }}
    //                 transition={{ duration: 1.5 + Math.r&om(), delay: i * 0.2 + 0.5, ease:'circOut' }}
    //                 style={{ top: `${20 + i * 15}%` }}
    //             />
    //         ))}
    //     </div>
    // ),
    spanCols: 1,
  },
  {
    id: "talent",
    title: "Tech talent sourcing & placement",
    description:
      "Access vetted tech professionals & build workforce readiness for your digital transformation journey.",
    IconComponent: <LiaLightbulb size={size} className="text-brand-yellow" />,
    bgColor: "bg-brand-yellow/10",
    className: "hover:shadow-brand-yellow/50 hover:border-white/20",

    spanCols: 1, // This card will span two columns on large screens
  },

  // Add more services as needed
];
const staticTextPartVariant = fadeInUp(0.7);

function TechServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="tech-services" className="relative bg-tech-bg pt-16">
      <GridPattern />

      <div className="container flex flex-col justify-center z-10 relative items-center mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center lg:px-48 lg:mb-16 mb-"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter lg:mb-6"
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>
              What&nbsp;
            </motion.span>

            <AnimatedHighlightedWord
              word="We"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={staticTextPartVariant}>Do.</motion.span>
          </motion.h1>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 jus items-center">
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 lg:order-2 order-1 py-8 lg:py-0"
          >
            <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-2xl sm:text-5xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <AnimatedHighlightedWord
                word="End-to-End"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-brand-yellow"
                className="mx-1"
              />
              <motion.span variants={staticTextPartVariant}>
                {" "}
                Data Strategy.{" "}
              </motion.span>
              <br />
              <motion.span variants={staticTextPartVariant}>
                Built for{" "}
              </motion.span>

              <AnimatedHighlightedWord
                word="Impact"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-brand-yellow"
                className="mx-1"
              />
            </motion.h1>
            <p className="text-base sm:text-xl text-data-text-muted max-w-3xl mx-auto mt-4 leading-relaxed">
              We work with forward-looking leaders to transform data from a cost
              centre into a competitive advantage. Our services include.
            </p>

            <AnimatedWrapper
              className="w-full flex justify-center lg:justify-start items-center py-10"
              variants={staggerContainer(0.15, 0.2)}
            >
              <Button
                size="lg"
                label="See All Solutions"
                onClick={() => navigate("/services")}
              />
            </AnimatedWrapper>
          </AnimatedWrapper>

          <AnimatedWrapper
            variants={staggerContainer(0.15, 0.2)}
            className="grid  grid-cols-1 sm:grid-cols-2 order-2 lg:order-1   gap-6 md:gap-8" // Base grid
          >
            {techServicesData.map((service, index) => {
              const isLast = index === techServicesData.length - 1;
              const isOddCount = techServicesData.length % 2 !== 0;

              return (
                <div
                  key={service.id}
                  className={`${
                    isLast && isOddCount
                      ? "lg:place-items-center lg:col-span-2"
                      : ""
                  }`}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}

export default TechServicesSection;
