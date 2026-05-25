import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import HeroCanvas from "./HeroCanvas";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-[#1E293B] relative">
      <HeroCanvas />

      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            What colleagues say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="relative bg-[#0F172A] border border-[#334155] rounded-3xl p-8 md:p-10 animate-fade-in">
            <Quote size={32} className="text-[#3B82F6]/30 mb-4" />

            <p className="text-[#94A3B8] text-base leading-relaxed mb-8 transition-all duration-500 ease-in-out">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/30 flex items-center justify-center">
                <span className="text-[#3B82F6] font-[700] text-sm">
                  {testimonials[currentIndex].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-[600] text-[#F1F5F9] text-sm">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-[#94A3B8] text-xs">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 bg-[#3B82F6]"
                      : "w-1.5 bg-[#334155]"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F172A] border border-[#334155] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#3B82F6] flex items-center justify-center transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F172A] border border-[#334155] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#3B82F6] flex items-center justify-center transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
