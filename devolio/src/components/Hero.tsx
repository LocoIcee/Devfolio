'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Hero() {
  const { isDarkMode } = useTheme();
  const sentenceRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sentenceRef.current) return;
    const createGlitchEffect = () => {
      const text = sentenceRef.current?.textContent || '';
      if (!text) return;
      
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let iteration = 0;
      const maxIterations = 10;
      
      const interval = setInterval(() => {
        if (sentenceRef.current) {
          sentenceRef.current.innerText = text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        }
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
      
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(() => {
      createGlitchEffect();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-teal-400 mb-4 font-medium"
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100 
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-linear-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text text-transparent">
            Your Name
          </span>
        </motion.h1>
        
        <motion.h2
          ref={sentenceRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-2xl md:text-4xl font-bold mb-8 text-gray-200"
        >
          FULL STACK DEVELOPER
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p className="text-lg text-gray-300">
            I create exceptional digital experiences with code and creativity.
            Building modern applications that make an impact.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-green-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-gray-600 hover:border-teal-500 transition-all"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-purple-400" />
        </motion.div>
      </motion.div>
      
      {/* Gradient circles */}
      <div className="absolute top-1/3 -right-72 w-160 h-160 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-72 w-120 h-120 bg-pink-600 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}