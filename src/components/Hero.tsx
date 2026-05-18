import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-white px-4 pb-16 pt-[142px] text-[#222222] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-[#151515] ">
          <img
            src="/lovable-uploads/hero-img.webp"
            alt="Adeniyi Adekoya drumming session"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="mt-14 flex justify-between gap-4">
          <div className="  max-w-[738px]">
            <h1 className="text-[18px] sm:text-[32px] lg:text-[48px] font-bold leading-[100%]  text-[#242424] ">
              Using <span className="text-[#2a86cf]">Rhythm</span> And Drumming To Create Connection,
              Wellbeing, And Shared Experiences Across{" "}
              <span className="text-[#3978d6]">Communities</span>.
            </h1>

            <div className="mt-8 space-y-2">
              <p className="text-[16px] sm:text-[28px] font-semibold leading-[100%] text-[#2a2a2a]">Adeniyi Adekoya</p>
              <p className="text-[12px] sm:text-[20px] font-normal leading-[100%] text-[#333333]">
                Creative Percussionist &amp; Community Practitioner
              </p>
            </div>
          </div>

          <div className="overflow-hidden min-h-[188px] min-w-[120px] h-full  w-[383px] sm:h-[326px] rounded-[28px] lg:mt-1">
            <img
              src="/lovable-uploads/image1.webp"
              alt="Adeniyi Adekoya holding drumsticks beside blue drums"
              className="w-full  object-cover sm:h-[464px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
