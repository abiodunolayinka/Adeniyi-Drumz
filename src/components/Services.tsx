import React from "react";
import { Monitor, Palette, Database, Shield, CreditCard, Cloud, GitBranch } from "lucide-react";
import { skills } from "@/data/portfolio";
import use3DTilt from "@/hooks/use3DTilt";

const iconMap: Record<string, React.ReactNode> = {
  Monitor:   <Monitor size={22} />,
  Palette:   <Palette size={22} />,
  Database:  <Database size={22} />,
  Shield:    <Shield size={22} />,
  CreditCard:<CreditCard size={22} />,
  Cloud:     <Cloud size={22} />,
  GitBranch: <GitBranch size={22} />,
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const { ref, style, glowStyle, handleMouseMove, handleMouseLeave } = use3DTilt(10, 1.04);

  return (
    <div
      ref={ref}
      style={{ ...style, transformStyle: "preserve-3d" as const, animationDelay: `${index * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#0F172A] rounded-2xl border border-[#334155] hover:border-[#3B82F6]/60 transition-colors duration-300 cursor-default animate-slide-up opacity-0 shimmer-card"
    >
      {/* Mouse-follow glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={glowStyle}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] transition-all duration-300 group-hover:bg-[#3B82F6]/20"
            style={{ transform: "translateZ(20px)" }}
          >
            {iconMap[skill.icon]}
          </div>
          <h3
            className="text-[#F1F5F9] font-[700] text-sm tracking-wide"
            style={{ transform: "translateZ(10px)" }}
          >
            {skill.category}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(6px)" }}>
          {skill.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-[#1E293B] text-[#94A3B8] text-xs font-[500] border border-[#334155] hover:border-[#3B82F6]/40 hover:text-[#F1F5F9] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="skills" className="py-24 bg-[#1E293B]">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">Technical Skills</span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            What I work with
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto text-base font-light">
            A curated stack built across 4+ years of production fintech, SaaS, and enterprise work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
