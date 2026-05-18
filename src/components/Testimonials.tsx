import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-white px-4 pb-28 pt-24 text-[#242424] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1050px]">
        <h2 className="text-center text-[28px] font-bold leading-tight tracking-normal sm:text-[32px] ">
          What People Say
        </h2>

        <div className="mx-auto mt-7 grid max-w-[900px] gap-5 md:grid-cols-[50px_1fr] md:gap-8">
          <div className="text-center text-[82px] font-black leading-[0.8] text-[#242424] md:text-left">
            &ldquo;
          </div>
          <blockquote>
            <p className="text-[16px] font-normal leading-[1.55] text-[#2f2f2f] sm:text-[20px]">
              Adeniyi&apos;s workshops are transformative experiences. His ability to connect with
              people through rhythm is truly inspiring. I highly recommend his sessions for anyone
              seeking personal growth and community engagement.
            </p>
            <footer className="mt-5">
              <p className="text-[16px] font-bold leading-tight text-[#242424]">Fatima Balogun</p>
              <p className="mt-1 text-[14px] font-normal leading-tight text-[#242424]">
                An Appreciative Patron
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
