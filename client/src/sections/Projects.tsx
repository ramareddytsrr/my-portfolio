import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Section id="projects">
    <div className="w-full text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Projects & Innovations</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.17, 0.55, 0.55, 1] }}
            className="bg-gray-800/50 dark:bg-black/30 rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
            </div>
            <div className="p-6 bg-gray-900/40 dark:bg-black/20 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Demo
                  <ExternalLink size={16} className="ml-1.5"/>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);