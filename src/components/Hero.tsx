import { imageUrl } from "../lib/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Full-bleed background image */}
      <img
        src={imageUrl("hero")}
        alt="Adeniyi Adekoya drumming session"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Layered gradient for drama + legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/85" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.55)_100%)]" />

      {/* Main content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center text-white">

        {/* Eyebrow label */}
        <p className="mb-8 inline-flex items-center gap-3 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-white/55">
          <span className="h-px w-8 bg-[#D4AF37]" />
          Creative Percussionist &amp; Community Practitioner
          <span className="h-px w-8 bg-[#D4AF37]" />
        </p>

        {/* Main headline — large and bold */}
        <h1 className="max-w-[900px] text-[40px] sm:text-[60px] lg:text-[60px] font-black leading-[1] tracking-tight">
          Using{" "}
          <span className="text-[#D4AF37]">Rhythm</span>
          {" "}And Drumming To Create Connection, Wellbeing, And Shared Experiences Across{" "}
          <span className="text-[#D4AF37]">Communities</span>.
        </h1>

        {/* Name */}
        <p className="mt-8 text-[18px] sm:text-[24px] font-semibold tracking-wide text-white/85">
          Adeniyi Adekoya
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#about"
            className="inline-flex h-12 items-center rounded-full bg-[#D4AF37] px-8 text-[14px] sm:text-[15px] font-bold text-black transition-colors hover:bg-[#c49b2a]"
          >
            Discover More
          </a>
          <a
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/35 px-8 text-[14px] sm:text-[15px] font-semibold text-white transition-colors hover:border-white/65 hover:bg-white/10"
          >
            Work With Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/35 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
