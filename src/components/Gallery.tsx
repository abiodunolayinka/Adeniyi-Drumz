import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import use3DTilt from "@/hooks/use3DTilt";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, style, glowStyle, handleMouseMove, handleMouseLeave } = use3DTilt(10, 1.03);

  return (
    <div
      ref={ref}
      style={{ ...style, transformStyle: "preserve-3d" as const, animationDelay: `${index * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#0F172A] rounded-2xl border border-[#334155] hover:border-[#3B82F6]/60 transition-colors duration-300 flex flex-col animate-slide-up opacity-0 shimmer-card cursor-default"
    >
      {/* Mouse-follow glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300" style={glowStyle} />

      {/* Top accent bar */}
      <div
        className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
        style={{ transform: "translateZ(4px)" }}
      />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3" style={{ transform: "translateZ(12px)" }}>
          <h3 className="text-[#F1F5F9] font-[700] text-base leading-tight pr-2">
            {project.name}
          </h3>
          {project.featured && (
            <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-[10px] font-[600] tracking-wide uppercase">
              Featured
            </span>
          )}
        </div>

        <p
          className="text-[#94A3B8] text-sm leading-relaxed mb-5 flex-1"
          style={{ transform: "translateZ(8px)" }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5" style={{ transform: "translateZ(10px)" }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-[#1E293B] text-[#94A3B8] text-[11px] border border-[#334155] hover:border-[#3B82F6]/40 hover:text-[#F1F5F9] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-4 pt-4 border-t border-[#1E293B]"
          style={{ transform: "translateZ(14px)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#F1F5F9] transition-colors font-[600] group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#3B82F6] transition-colors font-[600]"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="projects" className="py-24 bg-[#1E293B]">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            Featured Projects
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto text-base font-light">
            Production applications across banking, logistics, SaaS, and mobile — from monorepos to cross-platform apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
