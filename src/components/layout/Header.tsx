import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NavLink } from '../../types/portfolio';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  navLinks: NavLink[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  navLinks,
  handleNavClick
}) => (
  <>
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="text-xl font-bold text-white"
        >
          SR.
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)} 
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg p-4">
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => {
                handleNavClick(e, link.id);
                setIsMenuOpen(false);
              }} 
              className={`text-lg font-medium transition-colors duration-300 ${
                activeSection === link.id 
                  ? 'text-blue-400' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    )}
  </>
);