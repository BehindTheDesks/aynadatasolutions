import React, { useLayoutEffect, useRef, } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridPattern from "./GridPattern";

gsap.registerPlugin(ScrollTrigger);

interface TextSectionData {
  header: string;
  subtext: string;
  cta: string;
}

const textData: TextSectionData[] = [
  {
    header: "Discover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "Unlock Growth Patterns",
    subtext:
      "Identify key drivers for growth and understand the market dynamics affecting your business in real-time.",
    cta: "Start Analyzing",
  },
  {
    header: "Make Smarter Decisions",
    subtext:
      "Leverage predictive analytics to forecast future outcomes and make data-driven decisions with confidence.",
    cta: "Get a Demo",
  },
  {
    header: "Mae Smarter Decisions",
    subtext:
      "Leverage predictive analytics to forecast future outcomes and make data-driven decisions with confidence.",
    cta: "Get a Demo",
  },
  {
    header: "Mke Smarter Decisions",
    subtext:
      "Leverage predictive analytics to forecast future outcomes and make data-driven decisions with confidence.",
    cta: "Get a Demo",
  },
  {
    header: "ake Smarter Decisions",
    subtext:
      "Leverage predictive analytics to forecast future outcomes and make data-driven decisions with confidence.",
    cta: "Get a Demo",
  },
  {
    header: "iscover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "scover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "cover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "Discover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "Discover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
  },
  {
    header: "Discover Your Data",
    subtext:
      "Our platform analyzes millions of data points to provide you with unparalleled insights. See trends as they happen.",
    cta: "Learn More",
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
     <GridPattern/>

      <div className=" container relative w-[90%] h-[80%] max-w-7xl">
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-between items-end gap-[0.5%]">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              // THE FIX IS HERE: `h-full` gives the bar an initial height to be scaled by GSAP
              className="bar h-[50%] grow rounded-t-md bg-gradient-to-t from-[#FFC71F] to-[#FFC71F]"
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-[80%] max-w-2xl text-center text-white">
            {textData.map((text, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="text-section absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-shadow">
                  {text.header}
                </h2>
                <p className="text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-6 text-shadow">
                  {text.subtext}
                </p>
                <button className="text-base font-semibold px-6 py-3 rounded-full bg-blue-600 text-white cursor-pointer transition-colors hover:bg-blue-700 pointer-events-auto">
                  {text.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
