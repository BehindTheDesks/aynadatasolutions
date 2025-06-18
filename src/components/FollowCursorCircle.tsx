// src/components/FollowCursorCircle.tsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface FollowCursorCircleProps {
  sizeW?: number;
  sizeH?:number;
  color?: string;
  opacity?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  className?: string;
  zIndex?: number;
}

const FollowCursorCircle: React.FC<FollowCursorCircleProps> = ({
  sizeW = 150,
  sizeH = 60,
  color = 'bg-brand-accent',
  opacity = 0.5,
  springConfig = { stiffness: 400, damping: 30, mass: 0.5 },
  className = '',
  zIndex = 9999,
}) => {
  const [isClient, setIsClient] = useState(false);

  // MotionValues for mouse position (already centered)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      // Set exact cursor position
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    if (typeof window !== 'undefined') {
      // Set initial position to exact center of screen
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [mouseX, mouseY, sizeW, sizeH]);

  

  // Apply spring animation to the centered position
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  if (!isClient) {
    return null;
  }



  return (
    <motion.div
      className={`fixed pointer-events-none rounded-full flex justify-center items-center text-brand-yellow ${color} ${className}`}
      style={{
        width: sizeW,
        height: sizeH,
        x: springX,
        y: springY,
        // Center the circle on the coordinates using CSS transforms
        translateX: '-50%',
        translateY: '-480%',
        opacity: opacity,
        zIndex: zIndex,
      }}
    >
        <p>Your data guys </p>
    </motion.div>
  );
};

export default FollowCursorCircle;