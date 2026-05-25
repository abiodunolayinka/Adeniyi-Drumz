import React, { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import HeroCanvas from "./HeroCanvas";

const Videos = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-[#0F172A] relative">
      <HeroCanvas />
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">Work History</span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            Experience
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto text-base font-light">
            4+ years delivering production applications across fintech, SaaS, logistics, and EdTech.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#334155] hidden md:block" />

          <div className="flex flex-col gap-4">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative animate-slide-up opacity-0 md:pl-16"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#3B82F6] bg-[#0F172A] z-10 hidden md:block" />

                <div
                  className={`bg-[#1E293B] rounded-2xl border transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? "border-[#3B82F6]/50" : "border-[#334155] hover:border-[#3B82F6]/30"
                  }`}
                >
                  <button
                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] flex-shrink-0 mt-0.5">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="text-[#F1F5F9] font-[700] text-base">{job.role}</h3>
                        <p className="text-[#3B82F6] font-[500] text-sm mt-0.5">{job.company}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[#94A3B8] text-xs">{job.period}</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#0F172A] border border-[#334155] text-[#94A3B8] text-xs">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#94A3B8] mt-1 flex-shrink-0">
                      {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {expandedIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="h-px bg-[#334155] mb-4" />
                      <ul className="space-y-3">
                        {job.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3 text-sm text-[#94A3B8] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
