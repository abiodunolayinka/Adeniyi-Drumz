import React from "react";

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/image1.webp",
    alt: "Adeniyi playing drums",
  },
  {
    id: 2,
    src: "/lovable-uploads/image2.webp",
    alt: "Stage performance",
  },
  {
    id: 3,
    src: "/lovable-uploads/image3.webp",
    alt: "Studio session",
  },
  {
    id: 4,
    src: "/lovable-uploads/image4.webp",
    alt: "Concert performance",
  },
  {
    id: 5,
    src: "/lovable-uploads/image5.webp",
    alt: "Live session",
  },
  {
    id: 6,
    src: "/lovable-uploads/image6.webp",
    alt: "Festival performance",
  },
  {
    id: 7,
    src: "/lovable-uploads/image7.webp",
    alt: "Festival performance",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-drum-dark overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto  2xl:w-[1280px]">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-sm uppercase text-[white] font-medium mb-2">
            GALLERY
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Check out some of my pictures
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {galleryImages.concat(galleryImages).map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-4">
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 animate-fade-in">
        <a
          href="#contact"
          className="px-10 py-3 rounded-lg bg-[#262823] text-white font-light text-sm hover:bg-white/90 transition-colors tracking-widest"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Gallery;
