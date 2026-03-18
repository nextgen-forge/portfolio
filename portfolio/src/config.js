// ============================================================
//  PORTFOLIO CONFIG — Edit this file to personalize your site
// ============================================================

export const CONFIG = {
  // ---------- Personal Info ----------
  name: "Your Name",
  role: "Full Stack Developer",
  tagline: "I build things for the web.",
  bio: "I'm a passionate developer based in Hyderabad, India. I love crafting clean, performant, and user-friendly digital experiences. Currently focused on React, Node.js, and cloud-native architectures.",
  location: "Hyderabad, India 🇮🇳",
  email: "your.email@gmail.com",
  resumeUrl: "/resume.pdf", // Place your resume PDF in the /public folder

  // ---------- Social Links ----------
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  twitter: "https://twitter.com/your-handle",

  // ---------- GitHub Projects ----------
  // Option A: Auto-fetch from GitHub API (set fetchFromGitHub: true)
  // Option B: Manual list below
  githubUsername: "your-username", // used for auto-fetch
  fetchFromGitHub: true,           // set false to use manual projects below

  // Manual projects (used when fetchFromGitHub is false OR as fallback)
  projects: [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js. Features real-time updates and RESTful API integration.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/your-username/project-alpha",
      live: "https://project-alpha.vercel.app",
      featured: true,
    },
    {
      title: "Project Beta",
      description: "Machine learning pipeline for data processing and visualization. Processes large datasets with Python and Pandas.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/your-username/project-beta",
      live: null,
      featured: true,
    },
    {
      title: "Project Gamma",
      description: "CLI tool that automates repetitive DevOps tasks. Supports multiple cloud providers and CI/CD integrations.",
      tech: ["Go", "AWS", "GitHub Actions"],
      github: "https://github.com/your-username/project-gamma",
      live: null,
      featured: false,
    },
    {
      title: "Project Delta",
      description: "Mobile-first e-commerce platform with payment integration and inventory management dashboard.",
      tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
      github: "https://github.com/your-username/project-delta",
      live: "https://project-delta.vercel.app",
      featured: false,
    },
  ],

  // ---------- Skills ----------
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "GitHub Actions", "Vercel", "Linux", "Nginx"],
    },
    {
      category: "Tools",
      items: ["Git", "Figma", "VS Code", "Postman", "Jest", "Webpack"],
    },
  ],

  // ---------- Experience ----------
  experience: [
    {
      role: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 – Present",
      description: "Building scalable web applications serving thousands of users. Led the migration from a monolith to microservices architecture, reducing response times by 40%.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Startup Inc.",
      period: "2022 – 2023",
      description: "Developed responsive UI components with React and TypeScript. Improved lighthouse performance scores from 62 to 94 across all product pages.",
    },
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "B.Tech Computer Science",
      school: "Your University",
      period: "2019 – 2023",
      grade: "CGPA: 8.5/10",
    },
  ],
};
