import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Media', href: '#media' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = navItems.map((item) => document.querySelector(item.href));
      const currentSection = sections.find(
        (section) =>
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2 &&
          section.getBoundingClientRect().bottom >= window.innerHeight / 2
      );
      setActiveSection(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 md:rounded-3xl bg-transparent backdrop-blur-[26px] md:max-w-[1200px] mx-auto shadow-md transition-all duration-300 ease-in-out border border-[#1E293B] ${
        isScrolled ? 'top-0' : 'md:top-[40px]'
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#3B82F6] text-white font-bold text-sm">
            OA
          </span>
          <span className="font-[700] text-[#F1F5F9] tracking-wide text-sm hidden sm:block">
            Olayinka Abiodun
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-[500] transition-colors tracking-wide ${
                activeSection === item.href.substring(1)
                  ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                  : 'text-[#94A3B8] hover:text-[#F1F5F9]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#3B82F6] text-white text-sm font-[500] hover:bg-[#60A5FA] transition-colors"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0F172A]/98 border-t border-[#1E293B]">
          <div className="container py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-[500] py-3 px-2 rounded-lg transition-colors tracking-wide ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#3B82F6] bg-[#1E293B]'
                    : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#3B82F6] text-white text-sm font-[500] hover:bg-[#60A5FA] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
