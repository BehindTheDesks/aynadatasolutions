import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSliderProps {
  images: string[];
  height?: string;
  width?: string;
  dotPosition?: 'right' | 'bottom';
  direction?: 'horizontal' | 'vertical';
  scrollInterval?: number; // in ms
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll(); // reset when manually selected
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

  // Setup auto-scroll
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
      className={`relative overflow-hidden flex ${
        dotPosition === 'right' ? 'flex-row' : 'flex-col'
      } ${className}`}
      style={{ width, height }}
    >
      {/* Image container */}
      <div className="flex-1 relative w-full h-full overflow-hidden rounded-2xl">
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
      </div>

      {/* Dots */}
      <div
        className={`${
          dotPosition === 'right'
            ? 'flex flex-col justify-center items-center ml-4'
            : 'flex flex-row justify-center items-center mt-4'
        } gap-2  w-5`}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-brand-yellow scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
