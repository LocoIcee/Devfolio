import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

interface UseScrollAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { triggerOnce = true, threshold = 0.2 } = options;
  
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce,
    threshold
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);
  
  return { ref, inView, controls };
};