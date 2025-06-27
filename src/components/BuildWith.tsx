import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridPattern from "./GridPattern";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations/variants";
import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface StackingGridProps {
  title?: string;
  gridSize?: { rows: number; cols: number };
}

const BuildWith: React.FC<StackingGridProps> = ({
  title = "Modern Web Experiences",
  gridSize = { rows: 10, cols: 6 },
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const totalBoxes = gridSize.rows * gridSize.cols;

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!componentRef.current) return;

    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLDivElement>(".box");
      const centerText = ".center-text";

      gsap.set(boxes, { opacity: 0, scale: 0.2 });
      gsap.set(centerText, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "restart reverse restart reverse",

          // markers: true, // Uncomment for debugging
        },
      });

      tl.to(boxes, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          amount: 1.5,
          from: "random",
          grid: [gridSize.rows, gridSize.cols],
        },
      }).to(
        centerText,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        ">-1.2"
      );
    }, componentRef);

    return () => ctx.revert();
  }, [gridSize]);

  return (
    <section
      id="global-network"
      ref={componentRef}
      className=" bg-data-dark-bg  text-global-text-primary relative overflow-hidden pt-10"
    >
      <GridPattern />
      <div className="container h-screen lg:h-[60vh] flex lg:flex-row flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full h-[20%] lg:h-full mt-3 lg:overflow-visible overflow-hidden lg:flex-1 ">
          <div
            className="grid gap-2  sm:gap-3 w-full max-w-5xl"
            style={{
              gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
            }}
          >
            {Array.from({ length: totalBoxes }).map((_, index) => (
              <div
                key={index}
                className="box aspect-square bg-brand-yellow rounded-md"
              ></div>
            ))}
          </div>
        </div>
        {/* Grid container */}

        <div className="center-text w-full  lg:w-[50%] p-10 items-center justify-center ">
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
          >
            {/* Compose the headline */}
            <motion.span variants={fadeInUp(0.7)}>Let&apos;&nbsp;</motion.span>
            <AnimatedHighlightedWord
              word="Build"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={fadeInUp(0.7)}>&nbsp;With&nbsp;</motion.span>
            <AnimatedHighlightedWord
              word="Data"
              highlightColorClass="bg-brand-green/60" // Example
              textColorClass="text-brand-green"
              className="mx-1"
            />
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.7, 0.2)}
            className="text-lg sm:text-xl text-center text-data-text-muted leading-relaxed"
          >
            Ready to unlock measurable value from your data? Book a strategy
            conversation with our team.
          </motion.p>

          <motion.div
            className="w-full flex justify-center lg:justify-center mt-10  items-center lg:items-start"
            variants={fadeInUp(0.7, 0.3)}
          >
            <Button
              label="Book a Call Let's Talk"
              onClick={() => navigate("/contact")}
            />
          </motion.div>
        </div>
        <div className="w-full h-[20%] lg:h-full mt-3 lg:overflow-visible overflow-hidden lg:flex-1 ">
          <div
            className="grid gap-2 sm:gap-3 w-full max-w-5xl"
            style={{
              gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
            }}
          >
            {Array.from({ length: totalBoxes }).map((_, index) => (
              <div
                key={index}
                className="box aspect-square bg-brand-yellow rounded-md"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildWith;
