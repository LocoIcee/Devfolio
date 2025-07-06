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
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-500"
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
    I’m a Calgary-based software developer with a Bachelor of Science in Computer Science, passionate about solving problems and creating clean, engaging digital experiences. With a keen eye for detail and a love of building systems that just work, I strive to develop applications that are functional, scalable, and enjoyable to use.
  </p>
  <p className="text-lg leading-relaxed">
    Over the past few years, I’ve worked across a range of technologies and frameworks, from frontend design to backend logic, contributing to projects that solve real-world challenges. I’m a continuous learner, always exploring new tools and staying current with industry best practices.
  </p>
  <p className="text-lg leading-relaxed">
    Beyond code, I’m a hands-on creator — whether that means working on cars, exploring new game technologies, or building prototypes on my 3D printer. I love tackling challenges that blend creativity and engineering, and collaborating with others to make ideas come to life. Looking ahead, I’m excited to grow as a developer and contribute to meaningful projects that have real impact.
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