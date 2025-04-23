
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-white bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient( rgba(0,0,0,0.7)), url('/lovable-uploads/hero-img.webp')` 
      }}
    >
      <div className="container relative text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extralight mb-4 text-white animate-fade-in tracking-widest">
          ADENIYI DRUMZ
        </h1>
        <p className="text-lg md:text-xl font-extralight mb-10  text-white animate-fade-in animate-delay-200 tracking-wider">
        Empowering Lives Through Rhythm and Faith
        </p>
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in animate-delay-300">
          <a 
            href="#videos" 
            className="px-10 py-3 rounded-lg bg-white text-black font-light text-sm hover:bg-white/90 transition-colors tracking-widest"
          >
            Watch me Drum
          </a>
          <a 
            href="#about" 
            className="px-10 py-3 rounded-lg bg-transparent border border-white text-white font-light text-sm hover:bg-white/10 transition-colors tracking-widest"
          >
           See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
