import React from 'react';
import { Section } from '../components/common/Section';

interface AboutProps {
  summary: string;
}

export const About: React.FC<AboutProps> = ({ summary }) => (
  <Section id="about" className="pt-4">
    <div className="w-full text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto bg-gray-800/50 dark:bg-black/30 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700/50">
        <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Leadership Philosophy</h3>
          <p className="text-gray-400 leading-relaxed">
            I believe in empowering teams with autonomy and ownership, fostering a culture of continuous learning and transparent communication. My goal is to build resilient systems and even more resilient teams, capable of tackling complex challenges with creativity and precision.
          </p>
        </div>
      </div>
    </div>
  </Section>
);
