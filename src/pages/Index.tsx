
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Videos from '../components/Videos';
import Gallery from '../components/Gallery';
import Media from '../components/Media';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  // Add scroll reveal animation to elements with animate-* classes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Videos />
      <Gallery />
      <Media />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
