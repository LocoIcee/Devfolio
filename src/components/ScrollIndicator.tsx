import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "loop" 
        }}
      >
        <span className="text-xs text-gray-400 mb-2">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-gray-600 flex justify-center p-1">
          <motion.div 
            className="w-1 h-1.5 bg-green-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}