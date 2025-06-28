import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StackingGridProps {
  gridSize?: { rows: number; cols: number };
  boxColor?:string;
  className?:string;
}

const StackingGrid: React.FC<StackingGridProps> = ({
  gridSize = { rows: 10, cols: 10 },
  boxColor = "bg-brand-yellow/30",
  className,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const totalBoxes = gridSize.rows * gridSize.cols;

  useLayoutEffect(() => {
    if (!componentRef.current) return;

    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLDivElement>('.box');
      const centerText = '.center-text';

      // Initial state
      gsap.set(boxes, { opacity: 0, scale: 0.2 });
      gsap.set(centerText, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top 70%',
          end: 'bottom center',
          toggleActions: 'play none none none',
          // markers: true,
        },
      });

      tl.to(boxes, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: {
          amount: 1.5,
          from: 'random',
          grid: [gridSize.rows, gridSize.cols],
        },
      }).to(centerText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '>-1.2');
    }, componentRef);

    return () => ctx.revert();
  }, [gridSize]);

  return (
    <div
      ref={componentRef}
      className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-full min-h-screen flex items-center justify-center 
                  text-white p-4 sm:p-8 overflow-hidden `}
    >
      {/* Grid container */}
      <div
        className="grid gap-2 sm:gap-3 w-full max-w-5xl"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
        }}
      >
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <div
            key={index}
            className={`box aspect-square ${boxColor} rounded-md`}
          />
        ))}
      </div>

      {/* Optional center text */}
      {/* <div className="center-text absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-shadow px-4">
          Modern Web Experiences
        </h1>
      </div> */}
    </div>
  );
};

export default StackingGrid;
