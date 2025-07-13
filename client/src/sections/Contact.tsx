import React from 'react';
import { Section } from '../components/common/Section';
import { SocialLinks } from '../components/common/SocialLinks';
import { Contact as ContactType } from '../types/portfolio';

interface ContactProps {
  contact: ContactType;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => (
  <Section id="contact">
    <div className="w-full text-white text-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
      <div className="max-w-lg w-full mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <a 
          href={`mailto:${contact.email}`} 
          className="inline-block px-8 py-4 mb-8 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
        >
          Say Hello
        </a>
        <div className="flex justify-center">
          <SocialLinks contact={contact} />
        </div>
      </div>
    </div>
  </Section>
);