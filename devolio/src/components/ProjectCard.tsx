'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl?: string;
    featured: boolean;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  // Default project image (you can replace with your own)
  const projectImage = project.imageUrl || 'https://via.placeholder.com/600x400/1a1a1a/8b5cf6?text=Project+Image';

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with overlay */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img 
          src={projectImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent opacity-70"></div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-teal-500/50 hover:bg-green-700">Featured</Badge>
          </div>
        )}
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.h3 
            className="text-xl font-bold text-white mb-2"
            animate={isHovered ? { y: 0 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-sm text-gray-300 mb-4 line-clamp-2"
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge variant="outline" key={index} className="bg-black/50 text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="bg-black/50 text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-3"
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button size="sm" variant="outline" className="bg-black/50 border-gray-700 hover:bg-blue-600 hover:border-blue-600 gap-2">
              <Github className="h-4 w-4" />
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            
            {project.demoUrl && (
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
                <ExternalLink className="h-4 w-4" />
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}