import { GraduationCap, Award, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import useCounter from "@/hooks/useCounter";

const stats = [
  { end: 4, suffix: "+", label: "Years Experience" },
  { end: 10, suffix: "+", label: "Projects Delivered" },
  { end: 4, suffix: "",  label: "Companies" },
];

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, ref } = useCounter(stat.end, 1600);
  return (
    <div
      ref={ref}
      className="bg-[#0F172A] rounded-xl p-5 text-center border border-[#334155] hover:border-[#3B82F6]/40 transition-colors duration-300 group"
    >
      <p className="text-3xl font-[800] text-gradient-animate group-hover:scale-110 transition-transform duration-300 inline-block">
        {count}{stat.suffix}
      </p>
      <p className="text-[#94A3B8] text-xs mt-1.5 tracking-wide">{stat.label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0F172A]">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            Engineer who understands the domain
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left — bio + stats */}
          <div className="flex-1 animate-slide-up opacity-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E293B] border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-[600] mb-6 tracking-wide">
              <MapPin size={12} />
              Nigeria · Open to Remote
            </div>

            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6 font-light">
              {personalInfo.summary}
            </p>

            <p className="text-[#94A3B8] text-base leading-relaxed mb-8 font-light">
              I've worked across fintech, SaaS, logistics, and EdTech — building everything from multi-tenant
              enterprise platforms and real-time chat systems to subdomain routing middleware and KYC onboarding
              flows. I bring the same rigour I developed as an accountant to writing clean, maintainable code.
            </p>

            {/* Animated stat cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] text-white text-sm font-[600] hover:bg-[#60A5FA] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#3B82F6]/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Right — profile card + education + certs */}
          <div className="flex-1 flex flex-col gap-5 animate-slide-up opacity-0 animate-delay-200">
            {/* Profile placeholder */}
            <div className="flex items-center gap-4 bg-[#1E293B] rounded-2xl p-5 border border-[#334155] hover:border-[#3B82F6]/40 transition-colors duration-300 shimmer-card">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/10 border-2 border-[#3B82F6]/30 flex items-center justify-center animate-glow">
                  <span className="text-2xl font-[800] text-gradient-animate">OA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22C55E] border-2 border-[#1E293B]" />
              </div>
              <div>
                <p className="text-[#F1F5F9] font-[700] text-lg">Olayinka Abiodun</p>
                <p className="text-[#3B82F6] text-sm font-[500]">Senior Frontend Engineer</p>
                <p className="text-[#94A3B8] text-xs mt-1">Fintech & Enterprise Applications</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155] hover:border-[#3B82F6]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-[#F1F5F9] font-[600] text-sm uppercase tracking-wider">Education</h3>
              </div>
              <div className="space-y-4">
                {[
                  { degree: "B.Sc. Accounting", school: "Ajayi Crowther University" },
                  { degree: "Software Engineering Certification", school: "Grazac Academy" },
                ].map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <div>
                      <p className="text-[#F1F5F9] font-[500] text-sm">{edu.degree}</p>
                      <p className="text-[#94A3B8] text-xs mt-0.5">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155] hover:border-[#3B82F6]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Award size={16} />
                </div>
                <h3 className="text-[#F1F5F9] font-[600] text-sm uppercase tracking-wider">Certifications</h3>
              </div>
              <div className="space-y-3">
                {[
                  "ICAN Associate Chartered Accountant",
                  "Chartered Institute of Management",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] hover:border-[#D4AF37]/30 transition-colors duration-200 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-[#F1F5F9] text-sm font-[400]">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
