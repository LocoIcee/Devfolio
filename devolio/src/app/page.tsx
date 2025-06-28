'use client'
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Index() {
  const { isDarkMode } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [sectionReady, setSectionReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Hero />
      <div className="container mx-auto py-16 relative z-10">
        
        
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onAnimationComplete={() => setSectionReady(true)}
          className="mt-32 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Turning Ideas Into Digital Reality" 
              className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-500" 
              once={false}
            />
            
            <div className="prose prose-lg dark:prose-invert mx-auto mb-10 opacity-90">
              <p className="leading-relaxed">
                I build exceptional and accessible digital experiences for the web,
                focusing on performance, animation, and pixel-perfect design.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-blue-400 text-blue-400 hover:text-blue-600 hover:border-blue-600">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-green-500 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Stunning Designs</h3>
              <p className="text-gray-400">Creating visually impressive and user-friendly interfaces is my passion.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-green-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Performance Focus</h3>
              <p className="text-gray-400">Fast-loading and optimized websites that provide exceptional user experience.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Advanced Solutions</h3>
              <p className="text-gray-400">Solving complex problems with clean, maintainable, and scalable code.</p>
            </div>
          </div>
        </motion.section>
      </div>
      
      {showScrollIndicator && <ScrollIndicator />}
    </div>
  );
}