'use client';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import AnimatedText from '@/components/AnimatedText';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useScrollAnimation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen relative pt-20 pb-16">
      <ParticleBackground density={30} />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText 
          text="Get In Touch" 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-800 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:contact@yourdomain.com" className="text-lg font-medium hover:text-purple-400 transition-colors">
                        contact@yourdomain.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                      <Github className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                      <Linkedin className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                      <Twitter className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Twitter</p>
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                        @yourusername
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium mb-4">Let's Connect</h3>
                  <p className="text-gray-400 mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              {formSubmitted ? (
                <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-800 flex flex-col items-center justify-center h-full">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-center max-w-md">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <ContactForm onSubmitSuccess={handleFormSubmit} />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}