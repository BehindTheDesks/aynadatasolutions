import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridPattern from "./GridPattern";
import Chip from "./Chip";

gsap.registerPlugin(ScrollTrigger);

interface TextSectionData {
  chipText: string;
  header: string;
  subtext: string;
  cta?: string;
}

const textData: TextSectionData[] = [
  {
    chipText: "Foundation & Trust",
    header: "Laying the Groundwork for Trusted, Actionable Data",
    subtext:
      "Before data can deliver insight, value, or innovation, it must be trusted. That trust begins with how it is governed,protected, structured, and shared.At AYNA, we help organizations build resilient data foundations that inspire confidence, ensure compliance, and unlock cross-functional clarity.",
    // cta: "Learn More",
  },
  {
    chipText: "Intelligence & Automation",

    header: "Transforming Data into Direction, Clarity, and Competitive Edge",
    subtext:
      "Data becomes truly valuable when it sharpens your ability to see clearly, act decisively, and adapt quickly. AYNA helps public and private institutions move from spreadsheets and static dashboards to real-time intelligence and predictive systems; grounded in context, driven by purpose.",
    // cta: "Start Analyzing",
  },
  {
    chipText: "Growth & Execution",

    header: "Bridging Strategy and Value: From Vision to Bottom Line",
    subtext:
      "At AYNA, we don’t just help you understand your data’s potential, we help you turn it into growth, efficiency, and competitive advantage. This is where insight becomes strategy and ideas become execution. We work alongside teams across the organization to uncover monetization opportunities, drive transformation initiatives, and deliver outcomes that matter",
    // cta: "Get a Demo",
  },
  {
    chipText: " People & Capacity",

    header: "Empowering Teams to Sustain and Scale the Data Journey",
    subtext:
      "Great data strategies don’t succeed on technology alone, they succeed when people are equipped to lead and sustain them. AYNA supports clients in building the internal capacity it takes to move from dependence to ownership. We help align teams, build skillsets, and embed data-driven culture at every level.",
    // cta: "Get a Demo",
  },
];

const SolutionsSection: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const textSectionsRef = useRef<HTMLDivElement[]>([]);

  textSectionsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textSectionsRef.current.includes(el)) {
      textSectionsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray<HTMLDivElement>(".bar");
      const textSections = textSectionsRef.current;

      if (textSections.length === 0 || bars.length === 0) return;

      gsap.set(textSections.slice(1), { opacity: 0, y: 30 });
      gsap.set(textSections[0], { opacity: 1, y: 0 });
      gsap.set(bars, { scaleY: 0.1, transformOrigin: "bottom" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          start: "top top",
          end: `+=${textSections.length * 1000}`, // dynamic scroll length,
          scrub: 1,
        },
      });

      for (let i = 0; i < textSections.length - 1; i++) {
        tl.to(
          bars,
          {
            scaleY: () => 0.2 + Math.random() * 0.8,
            stagger: { amount: 0.4, from: "center" },
            ease: "power2.inOut",
          },
          "+=0.5"
        )
          .to(textSections[i], { opacity: 0, y: -30, duration: 0.3 }, "<")
          .to(
            textSections[i + 1],
            { opacity: 1, y: 0, duration: 0.3 },
            ">-0.2"
          );
      }

      tl.to(
        bars,
        {
          scaleY: 0.5,
          stagger: { amount: 0.4, from: "center" },
          ease: "power2.inOut",
        },
        "+=0.5"
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="h-screen w-full flex justify-center items-center bg-data-dark-bg overflow-hidden"
    >
      <GridPattern />

      <div className=" container relative w-[90%] h-[100%] max-w-7xl">
        <div className="absolute bottom-0 left-0 w-full h-[50%] flex justify-between items-end gap-[0.5%]">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              // THE FIX IS HERE: `h-full` gives the bar an initial height to be scaled by GSAP
              className="bar h-[50%] grow rounded-t-md bg-gradient-to-t from-[#FFC71F] to-[#FFC71F]"
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 flex top-0 justify-center items-center">
          <div className="relative w-full md:w-[80%]  max-w-2xl text-center text-white">
            {textData.map((text, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="text-section flex flex-col justify-center items-center absolute top-0  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
              >
                <div className="pb-5 ">
                  <Chip
                    textSize="lg"
                    bgColor="bg-yellow-300/40"
                    textColor="text-brand-yellow"
                    border={false}
                    label={`✨${text.chipText}`}
                  />
                </div>

                <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-shadow">
                  {text.header}
                </h2>
                <p className="text-sm md:text-base  leading-relaxed max-w-xl mx-auto mb-6 text-shadow">
                  {text.subtext}
                </p>
                {/* <button className="text-base font-semibold px-6 py-3 rounded-full bg-blue-600 text-white cursor-pointer transition-colors hover:bg-blue-700 pointer-events-auto">
                  {text.cta}
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
