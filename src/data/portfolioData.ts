import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Sita Rama Reddy Tamalampudi",
  headline: "Technical Lead",
  missionStatement: "Driving scalable innovation and leading high-performing engineering teams to build next-generation web solutions. Passionate about clean architecture, user-centric design, and technical excellence.",
  contact: {
    email: "tsrr123@gmail.com",
    phone: "7842229999",
    location: "Hyderabad, India",
    github: "https://github.com/ramareddytsrr",
    linkedin: "https://linkedin.com/in/ramareddytsrr",
    twitter: "https://twitter.com/ramareddytsrr"
  },
  summary: "Accomplished Senior Software Engineer with extensive experience in developing and integrating web applications using ReactJS, HTML5, CSS3, and Tailwind CSS. Proven track record of leading UI teams and delivering high-quality solutions for client companies like Tecnotree and Cognizant. Expertise in dynamic form generation, web service integration, and creating comprehensive customer lifecycle management platforms.",
  experience: [
    {
      role: "Technical Lead",
      company: "HCLTech",
      period: "Mar 2025 - Present",
      location: "Hyderabad, India",
      description: "Leading UI development teams, setting technical direction, and mentoring engineers to build robust and scalable front-end architectures for enterprise-level projects.",
      tags: ["Leadership", "Architecture", "ReactJS", "Team Management"]
    },
    {
      role: "Senior Software Engineer",
      company: "TRIE CODERS PVT LTD",
      period: "Mar 2019 - Feb 2025",
      location: "Bengaluru, India",
      description: "Developed and maintained key features for major client projects, including Standard Chartered Bank and Digital Customer Lifecycle Management platforms. Led UI initiatives and collaborated with cross-functional teams to deliver high-impact solutions.",
      tags: ["ReactJS", "Tailwind CSS", "Material UI", "Web Services"]
    }
  ],
  projects: [
    {
      title: "Digital Customer Lifecycle Management (DCLM)",
      description: "A comprehensive platform for managing retail and corporate customer registrations, providing a 360-degree view of customer details. Key contributions include developing the Member 360 View component and integrating web services.",
      tech: ["ReactJS", "Material UI", "HTML5", "CSS3"],
      link: null
    },
    {
      title: "Standard Chartered Bank Web App",
      description: "Worked on foundational components for the SCB web application, including reusable data tables, filters, and popups. Implemented a forex charges calculation module and led the UI team in developing pages with Tailwind CSS.",
      tech: ["ReactJS", "Tailwind CSS", "REST APIs"],
      link: null
    },
    {
      title: "Digital Loyalty Manager (DLM)",
      description: "Sole web developer for a loyalty points management application for telecom users. Responsible for the entire front-end, from wireframe implementation to deployment. The stack included the MERN stack.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      link: null
    },
    {
      title: "Financial Planning Suite",
      description: "This application offers modules for EMI estimation, interest calculation, chit fund analysis, and personal goal planning, providing users with a holistic view of their finances.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://ram-cal.vercel.app/"
    }
  ],
  skills: {
    "Languages": ["JavaScript (ES6+)", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["ReactJS", "Node.js & Express", "Tailwind CSS", "Vue JS", "Material UI", "Framer Motion"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools & Platforms": ["System Architecture", "CI/CD", "DevOps", "Git & GitHub", "Vercel"]
  }
};