import { imageUrl } from "../lib/image";

const About = () => {
  return (
    <section id="about" className="bg-white px-4 pb-28 pt-20 text-[#242424] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="text-[28px] font-bold leading-tight tracking-normal sm:text-[32px]">
          About Me
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-[14px] font-normal leading-[1.5] text-[#2f2f2f] sm:text-[16px]">
          Hi, I&apos;m Adeniyi Adekoya, a percussionist and creative practitioner based in the UK,
          delivering participatory rhythm-based workshops that support wellbeing, connection, and
          community engagement. My work focuses on using drumming as an accessible tool to bring
          people together, encourage expression, and create shared experiences across diverse groups.
        </p>

        <a
          href="#contact"
          className="mt-7 inline-flex h-10 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[14px] sm:text-[16px] font-bold text-black transition-colors hover:bg-[#c49b2a]"
        >
          Work With Me
        </a>

        <div className="mx-auto mt-12 flex max-w-[1040px] items-center justify-center gap-6 sm:mt-14 lg:gap-10">
          <div className="relative hidden h-[632px] w-[110px] shrink-0 overflow-hidden rounded-[38px] bg-[#d9d9d9] md:block">
            <img
              src={imageUrl("hero")}
              alt="Adeniyi Adekoya performing with drums"
              className="h-full w-full object-cover object-[44%_50%]"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="h-[420px] w-full max-w-[480px] overflow-hidden rounded-[28px] bg-[#d9d9d9] sm:h-[552px]">
            <img
              src={imageUrl("image4")}
              alt="Adeniyi Adekoya seated with blue drums"
              className="h-full w-full object-cover object-[52%_48%]"
            />
          </div>

          <div className="relative hidden h-[632px] w-[110px] shrink-0 overflow-hidden rounded-[38px] bg-[#d9d9d9] md:block">
            <img
              src={imageUrl("image7")}
              alt="Adeniyi Adekoya at a drumming session"
              className="h-full w-full object-cover object-[58%_50%]"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
