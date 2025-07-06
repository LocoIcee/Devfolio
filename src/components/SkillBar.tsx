'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const controls = useAnimation();

  useEffect(() => {
    const animateBar = async () => {
      await controls.start({
        width: `${percentage}%`,
        transition: { 
          duration: 1.2,
          ease: "easeOut",
          delay 
        }
      });
    };
    animateBar();
  }, [controls, percentage, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-linear-to-r from-blue-400 via-teal-500 to-green-500 h-2 rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
}