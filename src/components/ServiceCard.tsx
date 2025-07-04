// src/components/TechServiceCard.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";

export interface Service {
  id: string;
  title: string;
  description: string;
  IconComponent: React.ReactNode; // Can be a direct SVG or a component rendering an icon
  visualElement?: React.ReactNode; // For complex visuals like mockups or code snippets
  spanCols?: number; // For grid spanning (e.g., 1 or 2)
  spanRows?: number; // For grid spanning
  shadowColor?: string;
  bgColor?: string;
  className?: string;
  bgGradient?: string;
}

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className = "",
}) => {
  const colSpanClass = service.spanCols
    ? `lg:col-span-${service.spanCols}`
    : "lg:col-span-1";
  const rowSpanClass = service.spanRows
    ? `lg:row-span-${service.spanRows}`
    : ""; // md:row-span- is also an option

  return (
    <motion.div
      variants={cardVariant}
      className={`relative ${colSpanClass} ${rowSpanClass} 
                  bg-tech-card-bg backdrop-blur-md border border-tech-card-border 
                  rounded-card-tech p-3 sm:p-4 h-24 shadow-card-tech-main md:max-w-[25rem] 
                  flex flex-col justify-center items-center overflow-hidden group
                  transition-all duration-300 ease-out  ${service?.className} ${className}`}
    >
      {/* Optional: Subtle background gradient/pattern inside card */}
      <div
        className={`absolute inset-0 ${service?.bgGradient}  opacity-30  group-hover:opacity-50 transition-opacity duration-300 -z-10`}
      ></div>

      <div className="flex-shrink-0 relative  flex  gap-4 items-center justify-center">
        <div className="mt-auto flex-shrink-0 absolute h-14 z-10 opacity-20  translate-x-[100px] flex items-center justify-center">
          {service.visualElement ? (
            service.visualElement
          ) : (
            <motion.div
              className={`p-3 ${service?.bgColor} rounded-card-tech shadow-icon-glow ${service?.shadowColor} animate-glow-pulse`}
              // If using CSS var for shadow: style={{ '--tw-shadow-color': 'var(--color-tech-accent-glow)' } as React.CSSProperties}
            >
              {service.IconComponent}
            </motion.div>
          )}
        </div>
        <h3 className="text-lg font-semibold capitalize text-center text-tech-text-primary leading-tight z-20">
          {service.title}
        </h3>
      </div>
      {/* 
      <p className="text-tech-text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-grow">
        {service.description}
      </p> */}

      {/* Visual Element Area (Icon, Mockup, Code Snippet) */}
    </motion.div>
  );
};

export default ServiceCard;
