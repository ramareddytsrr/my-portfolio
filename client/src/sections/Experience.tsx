import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { Experience as ExperienceType } from '../types/portfolio';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => (
  <Section id="experience">
    <div className="w-full text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Professional Experience</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {experience.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.17, 0.55, 0.55, 1] }}
            className="bg-gray-800/50 dark:bg-black/30 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700/50"
          >
            <h3 className="text-xl font-bold text-blue-400">{job.role}</h3>
            <p className="text-md font-semibold text-gray-300">{job.company}</p>
            <p className="text-sm text-gray-500 mb-3">{job.period} | {job.location}</p>
            <p className="text-gray-400 text-sm mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);