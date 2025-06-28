import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSliderProps {
  images: string[];
  height?: string;
  width?: string;
  dotPosition?: 'right' | 'bottom'; // inside container
  direction?: 'horizontal' | 'vertical';
  scrollInterval?: number;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  height = '400px',
  width = '100%',
  dotPosition = 'right',
  direction = 'horizontal',
  scrollInterval,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isVertical = direction === 'vertical';
  const intervalRef = useRef<number | null>(null);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const resetAutoScroll = () => {
    if (scrollInterval && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, scrollInterval);
    }
  };

  useEffect(() => {
    if (scrollInterval) {
      intervalRef.current = setInterval(nextSlide, scrollInterval);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scrollInterval]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ width, height }}
    >
      {/* Image display */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute object-cover w-full h-full"
            initial={isVertical ? { y: 300, opacity: 0 } : { x: 300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={isVertical ? { y: -300, opacity: 0 } : { x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Dots inside image container */}
        <div
          className={`absolute ${
            dotPosition === 'bottom'
              ? 'bottom-4 left-1/2 -translate-x-1/2 flex-row'
              : 'top-1/2 right-4 -translate-y-1/2 flex-col'
          } flex items-center gap-2 z-10`}
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
