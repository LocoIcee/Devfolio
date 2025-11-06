'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sprout, GraduationCap, UserRoundPen, Briefcase, Rocket } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import Timeline from '@/components/Timeline';
import ParticleBackground from '@/components/ParticleBackground';

export default function About() {

  const timelineData = [
    {
      year: '2011–2012',
      title: 'The Spark — Modding Minecraft in Grade 3',
      company: 'Grade 3 Passion',
      icon: Heart,
      description:
        'Experimented with Minecraft mods to tweak game mechanics, sparking a lasting love for logic, design, and digital systems.'
    },
    {
      year: '2018',
      title: 'The Innovator — Arduino Hydroponic System',
      company: 'High School Eco Project',
      icon: Sprout,
      description:
        'Built an Arduino powered hydroponic system that monitored saturation level and adjusted water flow accordingly, earning a grant and proving how creativity, code, and sustainability fit together.'
    },
    {
      year: '2019–2023',
      title: 'Building the Foundation — BSc in Computer Science',
      company: 'Mount Royal University',
      icon: GraduationCap,
      description:
        'Deepened expertise in programming, algorithms, web development, and system architecture, learning how to turn ambitious ideas into scalable software.'
    },
    {
      year: '2022–Present',
      title: 'Creating for Others — Freelance Web Projects',
      company: 'Devtech Solutions',
      icon: UserRoundPen,
      description:
        'Designed and delivered custom websites for local businesses and personal ventures, sharpening user focused development and an eye for performance.'
    },
    {
      year: '2025–Present',
      title: 'Professional Growth — Computer Technician',
      company: 'ALTA E-Solutions',
      icon: Briefcase,
      description:
        'At Alta E-Solutions, I audit and prepare IT equipment for data wiping and refurbishing while managing electronic inventory records. I also built a Python/DuckDB pipeline to automate report generation, built a reusable USB external drive checking for Autopilot, speeding up the current enrollment check process by removing the need to reimage systems and deployed a self-hosted Snipe-IT system via Docker for secure on prem asset tracking.'
    },
    {
      year: 'Future Goals',
      title: 'Looking Ahead — Innovating and Building the Future',
      company: 'Full-Stack Development Journey',
      icon: Rocket,
      description:
        'Continue evolving as a full-stack developer, exploring automation, AI, and creative problem solving to craft intuitive, scalable experiences.'
    }
  ];

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
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedText 
            text="About Me" 
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-500"
          />

          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <Image
              src="/images/me.jpeg"
              alt="Cameron Hill"
              width={240}
              height={240}
              className="rounded-full border-4 border-white/10 shadow-xl shadow-blue-500/10 object-cover"
              priority
            />
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-16">
            <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none mb-12 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-800 space-y-6">
              <p className="text-lg leading-relaxed">
                I&apos;m a Calgary-based software developer with a Bachelor of Science in Computer Science, passionate about building clean, engaging, and efficient digital experiences. I specialize in creating scalable, user-centered applications that are both functional and enjoyable to use.
              </p>
              <p className="text-lg leading-relaxed">
                My experience spans frontend and backend technologies, where I&apos;ve contributed to projects that solve real-world challenges and improve user workflows. I&apos;m a continuous learner, always exploring new frameworks and tools to deliver modern, reliable solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of coding, I&apos;m a hands on creator, whether I&apos;m 3D printing prototypes, working on cars, or experimenting with game tech. I enjoy challenges that blend creativity and engineering, and I&apos;m excited to keep growing as a developer and contributing to projects that make a lasting impact.
              </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
                <Timeline items={timelineData} />
                <motion.p
                  variants={itemVariants}
                  className="mt-10 text-center text-gray-300 text-lg"
                >
                  From modding Minecraft to engineering automated systems and now building real world tech, my journey is built on curiosity, creativity, and continuous growth.
                </motion.p>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
