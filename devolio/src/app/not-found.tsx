import { motion } from 'framer-motion';
import { Link } from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <ParticleBackground density={30} />
      
      <div className="relative z-10 text-center px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative glitch elements */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-12 h-2 bg-pink-500 rounded-full"
        animate={{ 
          opacity: [0.2, 0.8, 0.2], 
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-purple-500 rounded-full"
        animate={{ 
          opacity: [0.2, 0.6, 0.2], 
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity 
        }}
      />
    </div>
  );
}