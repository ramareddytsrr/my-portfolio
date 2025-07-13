import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { Skills as SkillsType } from '../types/portfolio';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <Section id="skills">
    <div className="w-full text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Skills & Tech Stack</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.17, 0.55, 0.55, 1] }}
            className="bg-gray-800/50 dark:bg-black/30 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700/50"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map(skill => (
                <span 
                  key={skill} 
                  className="bg-gray-700 text-gray-200 px-3 py-1.5 text-sm rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);