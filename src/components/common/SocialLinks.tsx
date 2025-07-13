import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { Contact } from '../../types/portfolio';

interface SocialLinksProps {
  contact: Contact;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ contact }) => (
  <div className="flex items-center space-x-5 mt-4">
    {contact.linkedin && (
      <a 
        href={contact.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        <Linkedin size={24} />
      </a>
    )}
    <a 
      href={contact.github} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    >
      <Github size={24} />
    </a>
    {contact.twitter && (
      <a 
        href={contact.twitter} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        <Twitter size={24} />
      </a>
    )}
    <a 
      href={`mailto:${contact.email}`} 
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    >
      <Mail size={24} />
    </a>
  </div>
);