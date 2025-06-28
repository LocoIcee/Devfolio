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
  githubUrl: string;
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
          title: "E-commerce Platform",
          description: "A full-featured e-commerce platform with product listings, cart functionality, and payment processing using Stripe.",
          technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
          imageUrl: "/assets/projects/ecommerce.jpg", // This would be replaced with actual image paths
          githubUrl: "https://github.com/yourusername/ecommerce-platform",
          demoUrl: "https://ecommerce-demo.example.com",
          featured: true
        },
        {
          id: 2,
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
          technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
          imageUrl: "/assets/projects/taskmanager.jpg",
          githubUrl: "https://github.com/yourusername/task-manager",
          featured: true
        },
        {
          id: 3,
          title: "Portfolio Website",
          description: "A responsive portfolio website showcasing projects and skills with an interactive user interface.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          imageUrl: "/assets/projects/portfolio.jpg",
          githubUrl: "https://github.com/yourusername/portfolio",
          demoUrl: "https://yourportfolio.com",
          featured: false
        },
        {
          id: 4,
          title: "Weather Dashboard",
          description: "A weather application displaying current conditions and forecasts using weather API data.",
          technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
          imageUrl: "/assets/projects/weather.jpg",
          githubUrl: "https://github.com/yourusername/weather-dashboard",
          featured: false
        },
        {
          id: 5,
          title: "Blog Platform",
          description: "A content management system for creating and managing blog posts with user authentication.",
          technologies: ["Next.js", "GraphQL", "PostgreSQL", "Auth0"],
          imageUrl: "/assets/projects/blog.jpg",
          githubUrl: "https://github.com/yourusername/blog-platform",
          demoUrl: "https://blog-demo.example.com",
          featured: true
        },
        {
          id: 6,
          title: "Social Media Dashboard",
          description: "An analytics dashboard for tracking social media engagement and performance metrics.",
          technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
          imageUrl: "/assets/projects/social.jpg",
          githubUrl: "https://github.com/yourusername/social-dashboard",
          featured: false
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
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600"
        />
        
        <div className="max-w-md mx-auto mb-12 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1 flex">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('featured')} 
              className={`px-6 py-2 rounded-full transition-all ${filter === 'featured' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Featured
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
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
      </div>
    </div>
  );
}