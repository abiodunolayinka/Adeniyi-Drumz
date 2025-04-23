import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Service', href: '#services' },
  { name: 'Video', href: '#videos' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Testimonials', href: '#testimonial' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
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
      className={`fixed left-0 right-0 z-50 md:rounded-3xl bg-[#00000066] backdrop-blur-[56px] md:max-w-[1200px] mx-auto shadow-md transition-all duration-300 ease-in-out ${
        isScrolled ? 'top-0 ' : 'md:top-[64px]'
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center">
          <span className="font-[800] text-white tracking-widest text-sm">ADENIYI DRUMZ</span>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-[600] text-white hover:text-gray-300 transition-colors tracking-wider ${
                activeSection === item.href.substring(1) ? 'border-b-2 border-red-500' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img loading="lazy" src="/lovable-uploads/menu.svg" alt="Menu" className="w-7 h-7" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-extralight text-white hover:text-gray-300 transition-colors tracking-wider py-2 ${
                  activeSection === item.href.substring(1) ? 'border-b-2 border-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;