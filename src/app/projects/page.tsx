'use client';
import { useEffect, useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data fetch - in a real application, you would fetch from an API
  useEffect(() => {
    const fetchProjects = async () => {
      // This is sample data - replace with actual GitHub API calls if needed
      const dummyProjects: Project[] = [
        {
          id: 1,
          title: 'Devtech Solutions',
          description:
            'Consulting and solutions hub featuring a service catalog, quote intake, and CRM integrations tailored for small businesses.',
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          imageUrl: '/images/devtechsolutions.png',
          demoUrl: 'https://devtechsolutions.ca',
          featured: true,
        },
        {
          id: 2,
          title: 'Almost Home Canine Rescue (AHCR)',
          description:
            'Full-featured rescue platform with dynamic pet listings, foster workflows, and donation processing powered by Stripe and PayPal integrations.',
          technologies: ['Next.js', 'React', 'Supabase', 'Stripe', 'PayPal'],
          imageUrl: '/images/ahcr.png',
          githubUrl: 'https://github.com/LocoIcee/AHCR',
          demoUrl: 'https://ahcr.vercel.app/',
          featured: true,
        },
        {
          id: 3,
          title: 'Yasinaslight.com',
          description:
            'Collaborative site remodel for an artist collective with responsive storytelling sections, rich media, and custom theming.',
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          imageUrl: '/images/yasinaslight.png',
          githubUrl: 'https://github.com/LocoIcee/Yasinaslight',
          demoUrl: 'https://yasinaslight.vercel.app',
          featured: true,
        }
      ];
      
      setProjects(dummyProjects);
      setIsLoading(false);
    };
    
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen relative pt-20 pb-16">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText 
          text="My Projects" 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-500"
        />
        
        <div className="max-w-md mx-auto mb-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1 flex">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('featured')} 
              className={`px-6 py-2 rounded-full transition-all ${filter === 'featured' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Featured
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No projects found.</p>
          </div>
        )}
        
                {!isLoading && projects.length < 4 && (
          <div className="mt-16 text-center text-gray-400 text-sm">
            More legacy and in-progress builds coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
