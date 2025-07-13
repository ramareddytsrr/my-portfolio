import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  headline: string;
  missionStatement: string;
}

export const Hero: React.FC<HeroProps> = ({ name, headline, missionStatement }) => (
  <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gray-900 dark:bg-black z-0">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
      >
        {name}
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl font-light text-blue-300 dark:text-blue-400 mt-1"
      >
        {headline}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-gray-300 dark:text-gray-400"
      >
        {missionStatement}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        <a 
          href="#experience" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
        >
          View Experience
        </a>
        <a 
          href="#projects" 
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          See Projects
        </a>
      </motion.div>
    </div>
  </section>
);
