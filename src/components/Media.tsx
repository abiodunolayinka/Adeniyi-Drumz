import React from "react";
import { ExternalLink } from "lucide-react";
import { mediaFeatures } from "@/data/portfolio";
import HeroCanvas from "./HeroCanvas";

const Media = () => {
  return (
    <section id="media" className="py-24 bg-[#0F172A] relative">
      <HeroCanvas />

      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">
            Press & Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            Articles & Insights
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto text-base font-light">
            Featured in Nigerian press and sharing thoughts on engineering, AI,
            and building at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {mediaFeatures.map((item, index) => {
            const isPress =
              item.source === "Vanguard" || item.source === "ThisDay Live";
            const badgeClass = isPress
              ? "bg-[#D4AF37]/90 text-[#0F172A]"
              : "bg-[#0A66C2]/90 text-white";

            return (
              <div
                key={item.id}
                className="bg-[#1E293B] rounded-2xl border border-[#334155] hover:border-[#3B82F6]/50 overflow-hidden group transition-all duration-300 flex flex-col animate-slide-up opacity-0 shimmer-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 to-transparent" />
                  <span
                    className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-[600] ${badgeClass}`}
                  >
                    {item.source}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[#F1F5F9] font-[600] text-sm leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3B82F6] text-xs font-[600] hover:text-[#60A5FA] transition-colors group/link"
                  >
                    {item.source === "LinkedIn" ? "View post" : "Read article"}
                    <ExternalLink
                      size={12}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Media;
