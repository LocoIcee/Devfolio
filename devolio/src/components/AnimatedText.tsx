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
  const [animationComplete, setAnimationComplete] = useState(false);

 useEffect(() => {
  if (inView && !animationComplete) {
    const timeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < text.length) {
            return prev + text[prev.length];
          } else {
            clearInterval(typingInterval);
            setAnimationComplete(true);
            controls.start({ opacity: 1 });
            return prev;
          }
        });
      }, duration * 1000);
      return () => clearInterval(typingInterval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }

  if (!inView && !once && animationComplete) {
    setDisplayedText('');
    setAnimationComplete(false);
  }
}, [inView, once, text, controls, animationComplete, delay, duration]);


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