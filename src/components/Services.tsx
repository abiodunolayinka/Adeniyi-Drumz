import React from "react";
import { imageUrl } from "../lib/image";

const serviceItems = [
  {
    title: "Workshops",
    description:
      "Participants learn about rhythm, collaboration, and self-expression. Our workshops are designed to be fun, engaging, and educational.",
    image: imageUrl("image2"),
    alt: "Drumming workshop session",
  },
  {
    title: "Performances",
    description:
      "Audiences are captivated by the energy and skill Adeniyi brings to every performance. His passion is infectious, creating unforgettable experiences.",
    image: imageUrl("image6"),
    alt: "Adeniyi performing on stage with musicians",
  },
  {
    title: "Collaborations",
    description:
      "Adeniyi's collaborative projects blend diverse musical traditions, fostering unity and creativity. These projects showcase the power of music.",
    image: imageUrl("bg"),
    alt: "Collaborative drumming performance",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1280px] rounded-[34px] bg-[#f3f8fc] px-6 py-20 sm:px-10 lg:px-[172px]">
        <h2 className="text-center text-[28px] font-bold leading-tight tracking-normal text-[#242424] sm:text-[32px]">
          What I Do
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-9">
          {serviceItems.map((item) => (
            <article key={item.title} className="text-left">
              <div className="aspect-[1.05/1] overflow-hidden rounded-[18px] bg-[#d9d9d9]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-7 text-[20px] font-bold leading-tight text-[#242424] sm:text-[28px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[390px] text-[14px] font-normal leading-[1.45] text-[#2f2f2f] sm:text-[16px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
