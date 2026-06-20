const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-[#0d0d0d] px-4 pb-28 pt-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1050px]">
        <h2 className="text-center text-[28px] font-bold leading-tight tracking-normal text-white sm:text-[32px]">
          What People Say
        </h2>

        <div className="mx-auto mt-7 grid max-w-[900px] gap-5 md:grid-cols-[50px_1fr] md:gap-8">
          {/* Gold opening quote */}
          <div className="text-center text-[82px] font-black leading-[0.8] text-[#D4AF37] md:text-left">
            &ldquo;
          </div>
          <blockquote>
            <p className="text-[16px] font-normal leading-[1.55] text-white/80 sm:text-[20px]">
              Adeniyi&apos;s workshops are transformative experiences. His ability to connect with
              people through rhythm is truly inspiring. I highly recommend his sessions for anyone
              seeking personal growth and community engagement.
            </p>
            <footer className="mt-5">
              <p className="text-[16px] font-bold leading-tight text-white">Fatima Balogun</p>
              <p className="mt-1 text-[14px] font-normal leading-tight text-white/50">
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
