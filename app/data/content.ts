export const profile = {
  name: 'Dhinesh Kandukuri',
  role: 'Full-Stack Developer & GenAI Engineer',
  tagline:
    'B.Tech CSE student at VIT Vellore, currently interning as a Full-Stack Developer at intellious.tech — building production MERN applications and applied AI/ML tools.',
  location: 'Suryapet, Telangana, India',
  email: 'dineshkandukuri336@gmail.com',
  github: 'https://github.com/Dhinesh1628',
  linkedin: 'https://linkedin.com/in/dhinesh-kandukuri-2410ab40a',
  resumeNote: 'IBM Generative AI Certified · 2 VIT Patent Disclosures',
};

export const stats = [
  { label: 'LeetCode solved', value: '30+' },
  { label: 'Patent disclosures', value: '2' },
  { label: 'Projects shipped', value: '5+' },
];

export const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  Frontend: ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'Socket.io', 'JWT Auth'],
  Data: ['MongoDB', 'MongoDB Atlas', 'Mongoose'],
  'AI / ML': ['Groq API (LLaMA 3.1)', 'IBM watsonx', 'Prompt Engineering', 'LLM Integration'],
  'Cloud & Tools': ['AWS Serverless', 'Vercel', 'Git/GitHub', 'Cloudinary'],
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
  featured: boolean;
  metric?: string;
};

// `link` = live deployed URL (only set for projects that are actually hosted).
// `github` = source repo. Don't add a `link` for a project until it's deployed —
// a missing live link is better than a dead one.
export const projects: Project[] = [
  {
    slug: 'codelens',
    name: 'CodeLens',
    description:
      'AI-powered GitHub PR code review tool that fetches pull request diffs via the GitHub REST API and runs them through an LLM for automated, structured feedback.',
    highlights: [
      'Integrated Groq API (LLaMA 3.1 8B Instant) for fast, JSON-structured code review output — chosen after evaluating Anthropic and Gemini for cost/availability',
      'Cut manual PR review time by an estimated 60% by auto-generating contextual review comments',
      'Built JWT-based authentication and a dashboard with persistent review history',
      'Added per-file rate-limiting to stay within free-tier API limits and avoid 429 errors',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Groq API', 'LLaMA 3.1', 'JWT'],
    metric: '~60% reduction in manual first-pass PR review time',
    github: 'https://github.com/Dhinesh1628/codelens',
    featured: true,
  },
  {
    slug: 'freelancetracker',
    name: 'FreelanceTracker',
    description:
      'A collaborative client and project management platform built during a Full-Stack Developer internship at intellious.tech, with full role-based access control across teams.',
    highlights: [
      'Built 20+ REST APIs for client onboarding, budgeting, project tracking, and reporting — cutting data entry time by ~40%',
      'Designed a 3-role RBAC system (admin, member, viewer) with a custom usePermission hook, securing 100% of API endpoints',
      'Optimized MongoDB queries and schema design, reducing average API response time by ~35%',
      'Applied MVC architecture, reducing codebase complexity and enabling independent feature development',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT'],
    metric: '~40% less manual data entry, ~35% faster API response time',
    github: 'https://github.com/Dhinesh1628/freelancetracker',
    featured: true,
  },
  {
    slug: 'nayepankh-volunteer-system',
    name: 'NayePankh Volunteer Registration System',
    description:
      'Full-stack volunteer management platform built during an internship at NayePankh Foundation, with an admin dashboard and live data visualizations.',
    highlights: [
      'Built a 3-tier RBAC platform (admin, coordinator, volunteer) with 12+ REST APIs and 2 admin dashboards',
      'Automated volunteer registration workflows, reducing onboarding time by ~50%',
      'Added JWT authentication and 3D particle canvas animations with Framer Motion transitions',
      'Resolved Windows-specific deployment issues (MongoDB service config, PowerShell encoding)',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    metric: '~50% faster volunteer onboarding',
    github: 'https://github.com/Dhinesh1628/NayePankh',
    link: 'https://naye-pankh-149l.vercel.app/',
    featured: true,
  },
  {
    slug: 'chirpsphere',
    name: 'ChirpSphere',
    description:
      'A Twitter/X-style social platform with real-time interactions, built end-to-end across the stack.',
    highlights: [
      'Built 6 Mongoose models and all controllers/routes for a complete REST backend',
      'Implemented real-time updates with Socket.io and JWT auth with refresh tokens',
      'Integrated Cloudinary for media uploads and styled with Tailwind CSS v3',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'Cloudinary'],
    featured: false,
  },
  {
    slug: 'hotel-review-sentiment-analyzer',
    name: 'Hotel Review Sentiment Analyzer',
    description:
      'IBM Generative AI certification capstone project analyzing hotel review sentiment using NLP techniques.',
    highlights: [
      'Built as the capstone project for IBM Generative AI certification',
      'Applied sentiment classification to real-world review text',
    ],
    stack: ['Python', 'NLP', 'IBM watsonx'],
    featured: false,
  },
  {
    slug: 'aws-serverless-attendance',
    name: 'AWS Serverless Attendance System',
    description: 'A serverless attendance tracking system built on AWS managed services.',
    highlights: ['Designed an event-driven serverless architecture for attendance logging'],
    stack: ['AWS Lambda', 'AWS Serverless', 'Cloud Architecture'],
    featured: false,
  },
  {
    slug: 'iot-visitor-counter',
    name: 'IoT-Based Visitor Counter',
    description: 'An IoT system for real-time visitor counting using embedded sensors.',
    highlights: ['Built sensor-driven counting logic with real-time data reporting'],
    stack: ['IoT', 'Embedded Systems'],
    featured: false,
  },
];

export const education = {
  institution: 'Vellore Institute of Technology (VIT), Vellore',
  degree: 'B.Tech, Computer Science and Engineering',
  period: '2023 – 2027',
  cgpa: '7.57 / 10',
};

export const research = {
  title: 'Hybrid ML-Based Intrusion Detection System for IoT Networks',
  description:
    'Group research project building a hybrid machine learning approach to intrusion detection, curating and benchmarking across 15 papers and datasets including CIC IoT 2023, ToN-IoT, and BoT-IoT.',
};

export const experience = [
  {
    org: 'intellious.tech',
    role: 'Full-Stack Development Intern',
    period: 'May 2026 – Present · Bengaluru, India',
    description:
      'Building FreelanceTracker, a production client and project management platform. Designed 20+ REST APIs, a 3-role RBAC system securing all endpoints, and optimized MongoDB queries for ~35% faster response times, working in a 4-member team with Git-based code review.',
  },
  {
    org: 'NayePankh Foundation',
    role: 'Software Development Intern',
    period: 'Internship',
    description:
      'Built a full-stack volunteer registration and management system with a 3-tier RBAC admin dashboard, authentication, and data visualization — cutting onboarding time by ~50%.',
  },
];

export const certifications = [
  'IBM Generative AI Fundamentals',
  'AWS Cloud Fundamentals',
  '2 VIT Patent Disclosures (VIT IPR & TT Cell)',
];
