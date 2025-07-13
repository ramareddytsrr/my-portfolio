import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={`min-h-screen container mx-auto px-6 py-16 md:py-20 flex flex-col justify-center items-center ${className}`}
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
  >
    {children}
  </motion.section>
);
