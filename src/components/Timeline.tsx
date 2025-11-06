import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon?: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Timeline vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-blue-400 via-teal-500 to-green-500"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 pt-16 md:pt-0 ${
            index % 2 === 0 ? 'md:text-right' : ''
          }`}
        >
          {/* Timeline point */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-linear-to-br from-blue-500 via-teal-500 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30 z-10">
            {item.icon ? (
              <item.icon
                className="h-8 w-8 text-slate-900/80 dark:text-slate-950 transition-colors duration-300"
                aria-hidden="true"
              />
            ) : (
              <span className="text-slate-900/80 dark:text-slate-950" aria-hidden="true">
                •
              </span>
            )}
          </div>
          
          {/* Content */}
          <div className={`${index % 2 === 0 ? 'md:col-span-1' : 'md:col-start-2'}`}>
            <div className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <span className="inline-block px-3 py-1 mb-3 text-xs rounded-full bg-blue-600/20 text-blue-400">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <h4 className="text-sm text-gray-400 mb-3">{item.company}</h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
          
          {/* Empty div for layout */}
          <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-span-1'}`}></div>
        </motion.div>
      ))}
    </motion.div>
  );
}
