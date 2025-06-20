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

const size = 40

// --- Example Service Data ---
const techServicesData: Service[] = [
  {
    id: "policy",
    title: "Data governance, privacy, and quality",
    description:
      "Craft robust frameworks for data management, ensuring compliance, interoperability, and trust across institutions.",
    IconComponent: <FiShield size={size} className="text-blue-500" />,
    bgColor: "bg-blue-200/10",
    // visualElement: <CustomPrivacyVisual />, // If you have a more complex visual
    spanCols: 1, // Example: this card takes 1 column
    className: "hover:shadow-blue-500/50 hover:border-white/20",
  },
  {
    id: "monetization",
    title: "Data monetization frameworks",
    description:
      "Unlock revenue through licensing, marketplaces, and efficiency-driven models tailored for public and private sectors.",
    bgColor: "bg-brand-green/10",
    IconComponent: <FaRegMoneyBillAlt size={size} className="text-brand-green" />,
    className: "hover:shadow-brand-green/50 hover:border-white/20",
    spanCols: 1,
  },
  {
    id: "ai",
    title: "Advanced analytics and AI deployment",
    description:
      "Leverage predictive modeling, machine learning, and enterprise AI to drive smarter decisions and automation.",
    IconComponent: (
      <GiArtificialIntelligence size={size} className="text-purple-300" />
    ),
    bgColor: "bg-purple-300/10",
    className: "hover:shadow-purple-300/50 hover:border-white/20",
    spanCols: 1, // This card could span 2 columns if its visual is wide: lg:col-span-2
    spanRows: 1, // This card could span 2 rows if its visual is tall: lg:row-span-2
  },
  {
    id: "capacity",
    title: "Capacity building and AI training",
    description:
      "Empower your team with AI literacy, data stewardship certifications, and tailored digital transformation training.",
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
    //                 animate={{ width: `${30 + Math.random()*30}%` }}
    //                 transition={{ duration: 1.5 + Math.random(), delay: i * 0.2 + 0.5, ease:'circOut' }}
    //                 style={{ top: `${20 + i * 15}%` }}
    //             />
    //         ))}
    //     </div>
    // ),
    spanCols: 1,
  },
  {
    id: "talent",
    title: "Tech talent sourcing and placement",
    description:
      "Access vetted tech professionals and build workforce readiness for your digital transformation journey.",
    IconComponent: <LiaLightbulb size={size} className="text-brand-yellow" />,
    bgColor: "bg-brand-yellow/10",
    className: "hover:shadow-brand-yellow/50 hover:border-white/20",

    spanCols: 1, // This card will span two columns on large screens
  },

  {
    id: "strategy",
    title: "Strategy consulting",
    description:
      "Align vision, innovate business models, and execute with precision through ecosystem mapping and stakeholder engagement.",
    IconComponent: <FaChess size={size} className="text-white" />,
    bgColor: "bg-white/10",
    className: "hover:shadow-white/50 hover:border-white/20",

    spanCols: 1, // This card will span two columns on large screens
  },
  // Add more services as needed
];
const staticTextPartVariant = fadeInUp(0.7);

function TechServicesSection() {

  const navigate = useNavigate()

  return (
    <section id="tech-services" className="relative py-20 md:py-28 bg-tech-bg">
      <GridPattern />

      <div className="container flex flex-col justify-center z-10 relative items-center mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center mb-8 md:mb-8"
        >
          <Chip
            textSize="xl"
            bgColor="bg-yellow-300/40"
            textColor="text-brand-yellow"
            border={false}
            label="✨What We Do"
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
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
          <p className="text-lg sm:text-xl text-data-text-muted max-w-3xl mx-auto mt-4 leading-relaxed">
            We work with forward-looking leaders to transform data from a cost
            centre into a competitive advantage. Our services include.
          </p>
        </AnimatedWrapper>

        {/* Use a more flexible grid that allows for spanning */}
        <AnimatedWrapper
          variants={staggerContainer(0.15, 0.2)}
          className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8" // Base grid
        >
          {techServicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatedWrapper>

     <AnimatedWrapper
              className="w-full flex justify-center items-center py-10"
              variants={staggerContainer(0.15, 0.2)}
            >
              <Button
              size="lg"
                label="See All Solutions"
                onClick={() => navigate("/services")}
              />
            </AnimatedWrapper>
      </div>
    </section>
  );
}

export default TechServicesSection;
