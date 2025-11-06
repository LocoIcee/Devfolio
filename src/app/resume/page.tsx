'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function ResumePage() {
  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <AnimatedText
            text="Professional Snapshot"
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-500 to-green-500"
          />
          <p className="text-lg text-gray-300 leading-relaxed">
            An interactive view of Cameron&apos;s latest experience, achievements, and the
            technologies that power his projects. Download the full resume or explore the
            highlights below.
          </p>
        </motion.div>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="backdrop-blur-sm bg-white/5 border border-gray-800 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute -top-32 -right-12 h-64 w-64 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-10 h-64 w-64 bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                <div className="text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {resumeData.name}
                  </h1>
                  <p className="text-lg text-teal-300 font-medium">
                    {resumeData.headline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-500"
                  >
                    <a
                      href={resumeData.downloadHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Download size={18} />
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-700 bg-white/10 text-white hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-200"
                  >
                    <Link href="/contact">Work Together</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-gray-200 mb-8">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-full bg-blue-500/10 text-blue-300">
                    <MapPin size={20} />
                  </span>
                  <span>{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-full bg-teal-500/10 text-teal-300">
                    <Phone size={20} />
                  </span>
                  <a href={`tel:${resumeData.contact.phone}`} className="hover:text-teal-300 transition-colors">
                    {resumeData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-full bg-green-500/10 text-green-300">
                    <Mail size={20} />
                  </span>
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="hover:text-teal-300 transition-colors"
                  >
                    {resumeData.contact.email}
                  </a>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                {resumeData.summary}
              </p>
            </div>
          </div>
        </motion.section>

        <section className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                01
              </span>
              Career Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={fadeIn}
                  custom={0.2 + index * 0.1}
                  className="backdrop-blur-sm bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-blue-400/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-300">
                02
              </span>
              Education
            </h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeIn}
                  custom={0.2 + index * 0.1}
                  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-400 via-teal-500 to-green-500"></div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.program}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                      <ArrowUpRight size={16} />
                      {edu.timeframe}
                    </span>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    {edu.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-300">
                03
              </span>
              Technical Impact
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resumeData.technicalProjects.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeIn}
                  custom={0.2 + index * 0.1}
                  className="rounded-2xl border border-gray-800 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm shadow-lg shadow-teal-500/5"
                >
                  <p className="text-gray-200 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
                04
              </span>
              Professional Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experience.map((role, index) => (
                <motion.div
                  key={`${role.role}-${role.company}`}
                  variants={fadeIn}
                  custom={0.2 + index * 0.1}
                  className="relative rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <div className="pointer-events-none absolute inset-y-8 left-3 w-0.5 rounded-full bg-linear-to-b from-blue-400 via-teal-500 to-green-500 opacity-70"></div>
                  <div className="pl-8">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {role.role}
                        </h3>
                        <p className="text-gray-300">
                          {role.company} • {role.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400">{role.timeframe}</span>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                      {role.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
