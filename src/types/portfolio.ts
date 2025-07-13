export interface Contact {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string | null;
}

export interface Skills {
  [category: string]: string[];
}

export interface PortfolioData {
  name: string;
  headline: string;
  missionStatement: string;
  contact: Contact;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
}

export interface NavLink {
  id: string;
  label: string;
}