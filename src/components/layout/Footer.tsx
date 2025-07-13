import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import { Contact } from '../../types/portfolio';

interface FooterProps {
  contact: Contact;
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ contact, name }) => (
  <footer className="bg-gray-900/50 dark:bg-black/50 text-center py-6 mt-4">
    <div className="container mx-auto text-gray-500">
      <SocialLinks contact={contact} />
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
      </p>
    </div>
  </footer>
);
