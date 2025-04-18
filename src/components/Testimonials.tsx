import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Adeniyi was a dream come true. His rhythm and energy transformed our album into something exceptional. He's not just technically skilled but brings so much creativity to the table.",
    author: "James Wilson",
    position: "Music Producer"
  },
  {
    id: 2,
    quote: "I've collaborated with many drummers over my 20-year career, but Adeniyi stands out. His versatility across music genres and his ability to elevate any performance is truly remarkable.",
    author: "Sarah Johnson",
    position: "Recording Artist"
  },
  {
    id: 3,
    quote: "Adeniyi's drumming masterclass changed how I approach rhythm. His teaching style is clear, patient, and incredibly effective. I've grown more in 3 months with him than years on my own.",
    author: "Michael Thomas",
    position: "Student Drummer"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="testimonial" 
      className="py-24 bg-cover bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/lovable-uploads/bg.png')` 
      }}
    >
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-sm uppercase text-white font-medium mb-2">TESTIMONIALS</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What people say about me?
          </h2>
        </div>
        
        <div className="max-w-[570px] mx-auto relative">
          {/* Testimonial Box */}
          <div className="relative bg-black border border-[#EAEAEA] leading-[150%] rounded-3xl p-8 md:p-10 animate-fade-in">
            <div className="text-center">
              <p className="text-[14px] mb-8 transition-all duration-500 ease-in-out">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="transition-all duration-500 ease-in-out">
                <p className="font-medium text-white">{testimonials[currentIndex].author}</p>
                <p className="text-drum-gray">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev} 
            className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;