import { Mail, ArrowDown, Download, Code2, Layers, Zap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import useTypewriter from "@/hooks/useTypewriter";
import HeroCanvas from "@/components/HeroCanvas";

const roles = [
  "Senior Frontend Engineer",
  "React & Next.js Specialist",
  "Fintech UI Developer",
  "TypeScript Architect",
  "Enterprise App Builder",
];

// Floating code card shown beside the hero text on desktop
const FloatingCodeCard = () => (
  <div className="hidden lg:block relative w-[360px] flex-shrink-0 animate-float-slow" style={{ perspective: "1000px" }}>
    {/* Orbit rings behind the card */}
    <div className="absolute inset-[-40px] rounded-full border border-[#3B82F6]/10 animate-orbit" />
    <div className="absolute inset-[-70px] rounded-full border border-[#3B82F6]/05 animate-orbit-rev" />

    {/* Card */}
    <div
      className="relative bg-[#1E293B]/80 backdrop-blur-xl rounded-2xl border border-[#334155] p-5 shadow-2xl shadow-[#0F172A]/60 animate-glow shimmer-card"
      style={{ transform: "rotateY(-8deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[10px] text-[#475569] tracking-wider">SMEHub • Turborepo</span>
      </div>

      {/* Fake code */}
      <div className="font-mono text-[11px] leading-[1.7] space-y-0.5">
        <p><span className="text-[#7C3AED]">const</span> <span className="text-[#60A5FA]">SMEHub</span> <span className="text-[#94A3B8]">= () =&gt; {"{"}</span></p>
        <p className="pl-4"><span className="text-[#7C3AED]">const</span> <span className="text-[#F1F5F9]">data</span> <span className="text-[#94A3B8]">=</span> <span className="text-[#34D399]">useQuery</span><span className="text-[#94A3B8]">(</span><span className="text-[#FCD34D]">fetchLoans</span><span className="text-[#94A3B8]">);</span></p>
        <p className="pl-4"><span className="text-[#7C3AED]">const</span> <span className="text-[#F1F5F9]">ws</span> <span className="text-[#94A3B8]">=</span> <span className="text-[#34D399]">useSignalR</span><span className="text-[#94A3B8]">();</span></p>
        <p className="pl-4 mt-1"><span className="text-[#7C3AED]">return</span> <span className="text-[#94A3B8]">(</span></p>
        <p className="pl-8"><span className="text-[#F87171]">&lt;Dashboard</span></p>
        <p className="pl-10"><span className="text-[#60A5FA]">loans</span><span className="text-[#94A3B8]">={"{"}data{"}"}</span></p>
        <p className="pl-10"><span className="text-[#60A5FA]">realtime</span><span className="text-[#94A3B8]">={"{"}ws{"}"}</span></p>
        <p className="pl-8"><span className="text-[#F87171]">/&gt;</span></p>
        <p className="pl-4"><span className="text-[#94A3B8]">);</span></p>
        <p><span className="text-[#94A3B8]">{"}"};</span></p>
      </div>

      {/* Status bar */}
      <div className="mt-4 pt-3 border-t border-[#334155] flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-[#34D399]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
          Build passing
        </div>
        <span className="text-[10px] text-[#475569]">TypeScript · Zustand · SignalR</span>
      </div>
    </div>

    {/* Floating badge chips */}
    <div className="absolute -top-4 -right-6 bg-[#3B82F6] text-white text-[10px] font-[700] px-3 py-1.5 rounded-full shadow-lg shadow-[#3B82F6]/40 animate-float">
      Next.js 15
    </div>
    <div className="absolute -bottom-4 -left-4 bg-[#1E293B] border border-[#334155] text-[#94A3B8] text-[10px] font-[600] px-3 py-1.5 rounded-full animate-float-x">
      TanStack Query v5
    </div>
  </div>
);

const Hero = () => {
  const typedText = useTypewriter(roles, 72, 38, 2300);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050F08]"
    >
      {/* Nature canvas — aurora, fireflies, leaves, trees */}
      <HeroCanvas />

      {/* Forest-depth orbs — behind content, above canvas */}
      <div className="absolute top-1/3 left-[-80px] w-96 h-96 bg-[#22C55E]/06 rounded-full blur-[120px] z-[1] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-[-60px] w-72 h-72 bg-[#4ADE80]/05 rounded-full blur-[100px] z-[1] pointer-events-none animate-pulse-subtle animate-delay-300" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FCD34D]/03 rounded-full blur-[90px] z-[1] pointer-events-none animate-pulse-subtle animate-delay-200" />

      {/* Main content */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 py-32 lg:py-0">

        {/* Left — text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B]/80 backdrop-blur-sm border border-[#3B82F6]/25 text-[#3B82F6] text-xs font-[600] mb-8 opacity-0 text-reveal tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            Open to new opportunities
          </div>

          {/* Name — animated gradient */}
          <h1 className="opacity-0 text-reveal text-reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-[800] mb-3 tracking-tight leading-[1.1]">
            <span className="block text-[#F1F5F9] mb-1">Hi, I'm</span>
            <span className="text-gradient-animate">Olayinka Abiodun</span>
          </h1>

          {/* Typewriter role */}
          <div className="opacity-0 text-reveal text-reveal-delay-2 h-10 flex items-center justify-center lg:justify-start mb-5">
            <span className="text-xl md:text-2xl font-[300] text-[#94A3B8] tracking-wide typewriter-cursor">
              {typedText}
            </span>
          </div>

          {/* Summary */}
          <p className="opacity-0 text-reveal text-reveal-delay-3 text-[#94A3B8] text-base md:text-lg leading-relaxed mb-10 font-light max-w-xl mx-auto lg:mx-0">
            4+ years shipping production{" "}
            <span className="text-[#F1F5F9] font-[500]">fintech & enterprise apps</span>{" "}
            with React, Next.js & TypeScript.{" "}
            <span className="text-[#F1F5F9] font-[500]">ICAN-certified</span> — I understand finance at domain level, not just the UI.
          </p>

          {/* CTA row */}
          <div className="opacity-0 text-reveal text-reveal-delay-4 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#3B82F6] text-white font-[600] text-sm hover:bg-[#60A5FA] transition-all duration-200 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:-translate-y-0.5"
            >
              <Layers size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-[#334155] text-[#F1F5F9] font-[500] text-sm hover:bg-[#1E293B] hover:border-[#3B82F6]/60 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className="opacity-0 text-reveal text-reveal-delay-5 flex gap-3 justify-center lg:justify-start">
            {[
              {
                label: "GitHub",
                href: personalInfo.github,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "GitLab",
                href: personalInfo.gitlab,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: personalInfo.linkedin,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                href: `mailto:${personalInfo.email}`,
                icon: <Mail size={18} />,
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1E293B] border border-[#334155] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#3B82F6] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-200"
              >
                {icon}
              </a>
            ))}

            {/* Inline stat pills */}
            <div className="ml-4 hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1E293B] border border-[#334155] text-xs text-[#94A3B8]">
                <Zap size={11} className="text-[#3B82F6]" />
                4+ yrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1E293B] border border-[#334155] text-xs text-[#94A3B8]">
                <Code2 size={11} className="text-[#3B82F6]" />
                React · Next.js
              </span>
            </div>
          </div>
        </div>

        {/* Right — 3D floating code card */}
        <FloatingCodeCard />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#4ADE80]/60 animate-bounce opacity-0 text-reveal text-reveal-delay-5">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={14} />
      </div>

      {/* Interaction hint */}
      <div className="absolute bottom-8 right-6 flex items-center px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-[#4ADE80]/15 opacity-0 text-reveal text-reveal-delay-5 pointer-events-none">
        <span className="text-[9px] tracking-[0.18em] uppercase text-[#4ADE80]/50">drag · move · click</span>
      </div>
    </section>
  );
};

export default Hero;
