'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ 
    triggerOnce: once,
    threshold: 0.1 
  });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (inView && !animationComplete) {
      // Reset if we need to replay the animation
      if (currentIndex > 0 && !once) {
        setCurrentIndex(0);
        setDisplayedText('');
      }
      
      // Wait for the specified delay before starting
      const timeout = setTimeout(() => {
        const typingInterval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayedText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          } else {
            clearInterval(typingInterval);
            setAnimationComplete(true);
            controls.start({ opacity: 1 });
          }
        }, duration * 1000);
        
        return () => clearInterval(typingInterval);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    } else if (!inView && !once && animationComplete) {
      // Reset animation if not in view and not set to run only once
      setAnimationComplete(false);
    }
  }, [inView, once, text, currentIndex, controls, animationComplete, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block w-0.5 h-5 bg-teal-400 ml-0.5"
        style={{ display: animationComplete ? 'none' : 'inline-block', verticalAlign: 'middle' }}
      />
    </motion.div>
  );
}