'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '@/components/AnimatedText';
import SkillBar from '@/components/SkillBar';
import Timeline from '@/components/Timeline';
import ParticleBackground from '@/components/ParticleBackground';

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skillsData = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'React.js', percentage: 92 },
    { name: 'Node.js', percentage: 88 },
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'UI/UX Design', percentage: 80 },
    { name: 'GraphQL', percentage: 75 },
    { name: 'DevOps', percentage: 70 },
  ];

  const timelineData = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: 'Led a team of developers in building complex web applications with React and TypeScript.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      description: 'Developed responsive web applications and improved site performance by 40%.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      description: 'Collaborated on creating interactive user interfaces and implementing new features.'
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, focusing on web technologies and software development.'
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
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600"
          />

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none mb-12 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-800">
              <p className="text-lg leading-relaxed">
                I am a passionate developer with a strong focus on creating exceptional digital experiences. 
                With a keen eye for detail and a love for clean, efficient code, I strive to build applications 
                that are not only functional but also visually stunning and enjoyable to use.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech began over 5 years ago, and since then, I've worked with a variety of technologies 
                and frameworks to deliver solutions that solve real-world problems. I believe in continuous learning 
                and staying updated with the latest industry trends and best practices.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community involvement.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
              <div className="space-y-6">
                {skillsData.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
              <Timeline items={timelineData} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}