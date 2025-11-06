'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
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
    <section className="h-screen mx-auto flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-teal-400 mb-4 font-medium"
        >
          Hello, I&apos;m
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
            Cameron Hill
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
            <Link href="/resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-blue-500/60 hover:border-blue-400 hover:text-blue-200 transition-all"
              >
                View Resume
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-green-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all"
              >
              View My Work
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-gray-600 hover:border-teal-500 transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Gradient circles */}
      <div className="absolute top-1/3 -right-72 w-123 h-124 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-72 w-120 h-120 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
