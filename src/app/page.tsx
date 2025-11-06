'use client'
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ParticleBackground from '@/components/ParticleBackground';
import { useTheme } from '@/hooks/useTheme';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
    </div>
  );
}