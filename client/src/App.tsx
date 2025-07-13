import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { portfolioData } from './data/portfolioData';
import { navLinks, sectionIds } from './constants/navigation';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { handleNavClick } = useSmoothScroll();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    handleNavClick(e, sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 dark:bg-black min-h-screen font-sans transition-colors duration-500">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        navLinks={navLinks}
        handleNavClick={handleNavigation}
      />

      <main>
        <Hero 
          name={portfolioData.name}
          headline={portfolioData.headline}
          missionStatement={portfolioData.missionStatement}
        />
        <About summary={portfolioData.summary} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact contact={portfolioData.contact} />
      </main>

      <Footer 
        contact={portfolioData.contact}
        name={portfolioData.name}
      />
    </div>
  );
}