export type ResumeHighlight = {
  title: string;
  description: string;
};

export type ResumeEducation = {
  institution: string;
  location: string;
  program: string;
  timeframe: string;
  details: string[];
};

export type ResumeExperience = {
  role: string;
  company: string;
  location: string;
  timeframe: string;
  achievements: string[];
};

export type ResumeCommunity = {
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  contributions: string[];
};

export const resumeData = {
  name: 'Cameron Hill',
  headline: 'Full Stack Developer & IT Specialist',
  contact: {
    location: 'Calgary, Alberta',
    phone: '403-376-5213',
    email: 'cameron13@live.ca',
  },
  summary:
    'Versatile developer with hands on experience in systems support, full stack web development, and team leadership. Passionate about blending creative problem solving with resilient, user focused software.',
  highlights: [
    {
      title: 'Multi-platform Technologist',
      description:
        'Highly proficient across Windows, macOS, iOS, Android, and Linux environments with experience installing operating systems, migrating data, and tailoring device configurations.',
    },
    {
      title: 'Network Troubleshooting',
      description:
        'Skilled at analyzing and resolving networking issues while optimizing connectivity for residential and business use cases.',
    },
    {
      title: 'Software Development',
      description:
        'Hands on experience in C++, Java, JavaScript, and Python with projects ranging from gaming simulations to production ready web applications.',
    },
    {
      title: 'Driven Collaborator',
      description:
        'Accustomed to balancing academic and professional commitments, continuously pursuing growth opportunities in every role undertaken.',
    },
  ] satisfies ResumeHighlight[],
  education: [
    {
      institution: 'Mount Royal University',
      location: 'Calgary, AB',
      program: 'Bachelor of Science, Major in Computer Science • Cognate in Physics',
      timeframe: 'Sept 2018 — Apr 2025',
      details: [
        'Coursework emphasizes software architecture, data structures, and applied physics.',
        'Collaborated with peers to deliver research driven software projects and comprehensive systems documentation.',
      ],
    },
  ] satisfies ResumeEducation[],
  technicalProjects: [
    'Devtech Solutions - Launched a consulting hub with service catalog, CRM integration, and quote intake built on Next.js and Tailwind, deployed via Vercel.',
    'Almost Home Canine Rescue (AHCR) - Built a full-featured rescue platform with dynamic pet listings, intake workflows, and Stripe/PayPal donations backed by Supabase.',
    'Yasinaslight.com - Partnered with mgx.dev on a Next.js relaunch featuring CMS-friendly sections, accessible typography, and optimized storytelling for an artist collective.',
    'Safe Clean Maids - Delivered a lead-focused cleaning service site with reusable Tailwind UI blocks, SEO-tuned copy, and contact flows deployed to Vercel.',
  ],
  experience: [
    {
      role: 'Computer Technician',
      company: 'ALTA E-Solutions',
      location: 'Calgary, AB',
      timeframe: 'Aug 2025 — Present',
      achievements: [
        'Audit and prepare IT equipment for refurbishing, including setup, diagnostics, and detailed reporting on device health.',
        'Manage electronic inventory systems, ensuring accurate documentation for all incoming and outgoing assets.',
        'Built a Python/DuckDB pipeline to merge audit and inventory CSVs into automated, standardized reports, reducing manual processing time.',
        'Built a reusable USB based Windows OOBE environment that auto resets Autopilot state, speeding up the current enrollment check process by removing the need to reimage systems.',
        'Deployed a self hosted Snipe-IT system via Docker for secure, on prem asset tracking and audit management.'
      ],
    },
    {
      role: 'General Labourer',
      company: 'DIRTT Environmental Solutions',
      location: 'Calgary, AB',
      timeframe: 'Sept 2020 — Sept 2021',
      achievements: [
        'Analyzed factory order discrepancies and production efficiency to propose process improvements.',
        'Led a team of 3–4 to streamline inventory management practices, improving turnaround for shipping and receiving.',
      ],
    },
    {
      role: 'Independent Contractor',
      company: 'TIPS Personnel',
      location: 'Calgary, AB',
      timeframe: 'Apr 2020 — Sept 2020',
      achievements: [
        'Supported multiple construction projects, stepping into varied roles to meet tight deadlines.',
        'Built strong relationships with clients by proactively identifying needs and taking ownership of additional tasks.',
      ],
    },
    {
      role: 'Sales Associate',
      company: 'Canadian Tire',
      location: 'Brooks, AB',
      timeframe: 'Jan 2017 — Aug 2019',
      achievements: [
        'Leveraged deep product knowledge to guide customers toward the right solutions while maintaining positive rapport.',
        'Ensured accurate transactions and a seamless checkout experience through attentive customer service.',
      ],
    },
  ] satisfies ResumeExperience[],
  downloadHref: '/assets/cameron-hill-resume.pdf',
};

export type ResumeData = typeof resumeData;
