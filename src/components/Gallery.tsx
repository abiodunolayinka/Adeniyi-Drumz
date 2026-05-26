import React, { useState } from "react";
import { imageUrl } from "../lib/image";

const allGalleryImages = [
  { id: 1, src: imageUrl("image1"), alt: "Adeniyi playing drums" },
  { id: 2, src: imageUrl("image3"), alt: "Studio session" },
  { id: 3, src: imageUrl("image5"), alt: "Live session" },
  { id: 4, src: imageUrl("image6"), alt: "Festival performance" },
  { id: 5, src: imageUrl("image7"), alt: "Concert performance" },
  { id: 6, src: imageUrl("gal1"), alt: "Stage performance" },
  { id: 7, src: imageUrl("gal2"), alt: "Stage performance" },
  { id: 8, src: imageUrl("gal3"), alt: "Stage performance" },
  { id: 9, src: imageUrl("gal4"), alt: "Stage performance" },
  { id: 10, src: imageUrl("gal5"), alt: "Stage performance" },
  { id: 11, src: imageUrl("gal6"), alt: "Stage performance" },
  { id: 12, src: imageUrl("gal7"), alt: "Stage performance" },
  { id: 13, src: imageUrl("gal8"), alt: "Stage performance" },
];

const INITIAL_COUNT = 9;
const LOAD_STEP = 9;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleImages = allGalleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < allGalleryImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_STEP, allGalleryImages.length),
    );
  };

  return (
    <section id="gallery" className="py-24 bg-drum-dark overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto 2xl:w-[1280px]">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-sm uppercase text-white font-medium mb-2">
            GALLERY
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Check out some of my pictures
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Load More / Contact CTA */}
        <div className="flex justify-center items-center mt-10 animate-fade-in">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="px-10 py-3 rounded-lg bg-[#262823] text-white font-light text-sm hover:bg-white hover:text-black transition-colors tracking-widest"
            >
              Load More
            </button>
          ) : (
            <a
              href="#contact"
              className="px-10 py-3 rounded-lg bg-[#262823] text-white font-light text-sm hover:bg-white/90 transition-colors tracking-widest"
            >
              Contact Me
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
