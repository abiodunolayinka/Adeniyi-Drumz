import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white bg-[rgba(74, 137, 61, 0.1)">
      <div className="container border border-[#EAEAEA] md:rounded-[16px] p-8 md:p-10 lg:p-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 ">
          <div className="w-auto md:w-[447px] animate-slide-up opacity-0">
            <h3 className="text-sm uppercase text-[#262823] font-normal mb-2">
              About Me
            </h3>
            <h2 className="text-2xl font-normal mb-2 text-[#333333]">
              Seasoned Drummer with Sauce
            </h2>
            <p className="text-[#787878] text-[18px] mb-6 font-light ">
              Hi, I’m Adeniyi Adekoya, known as Adeniyi Drumz. I am a
              professional drummer and cultural advocate using the power of
              rhythm to inspire, connect, and empower communities globally.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#262823] text-white text-sm font-light rounded-lg hover:bg-black/90 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="  animate-slide-up opacity-0">
            <div className="rounded rounded-tl-[16px] rounded-br-[16px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden w-[376px] h-[476px]">
              <img
                loading="lazy"
                src="/lovable-uploads/image1.webp"
                alt="Adeniyi playing drums"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
