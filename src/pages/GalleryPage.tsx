import React, { useState } from "react";
import Navbar from "../components/Navbar";

type GalleryTab = "photos" | "videos";

const photos = [
  {
    src: "/lovable-uploads/bg.png",
    alt: "Adeniyi Adekoya performing with percussionists",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/lovable-uploads/image2.webp",
    alt: "Adeniyi Adekoya seated at a drum kit",
    className: "",
  },
  {
    src: "/lovable-uploads/image6.jpg",
    alt: "Adeniyi Adekoya performing with a percussion group",
    className: "",
  },
  {
    src: "/lovable-uploads/image5.webp",
    alt: "Adeniyi Adekoya teaching beside a blue drum kit",
    className: "",
  },
  {
    src: "/lovable-uploads/image2.jpg",
    alt: "Workshop participants in a community hall",
    className: "",
  },
  {
    src: "/lovable-uploads/image3.webp",
    alt: "Workshop group posing with drumsticks",
    className: "",
  },
  {
    src: "/lovable-uploads/hero-img.webp",
    alt: "Outdoor drumming practice",
    className: "",
  },
  {
    src: "/lovable-uploads/image7.webp",
    alt: "Community performance group photo",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/lovable-uploads/image6.jpg",
    alt: "Welcoming cultures celebration performance",
    className: "",
  },
  {
    src: "/lovable-uploads/image4.webp",
    alt: "Live cultural drumming performance",
    className: "",
  },
];

const videos = [
  {
    src: "/lovable-uploads/image4.webp",
    alt: "Live cultural drumming video",
  },
  {
    src: "/lovable-uploads/image3.webp",
    alt: "Workshop group video",
  },
  {
    src: "/lovable-uploads/image2.jpg",
    alt: "Participatory rhythm workshop video",
  },
  {
    src: "/lovable-uploads/bg.png",
    alt: "Community percussion performance video",
  },
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("photos");

  return (
    <div className="min-h-screen bg-white text-[#242424]">
      <Navbar />

      <main className="mx-auto max-w-[1280px] px-5 pb-16 pt-[112px] sm:px-8 lg:px-0">
        <header className="text-center">
          <p className="text-[26px] font-medium uppercase leading-none tracking-normal">Gallery</p>
          <h1 className="mx-auto mt-4 max-w-[980px] text-[42px] font-bold leading-[1.1] tracking-normal sm:text-[54px]">
            Visual Proof Of My Practice In Action
          </h1>

          <div className="mx-auto mt-6 grid h-[46px] w-[224px] grid-cols-2 rounded-full border border-[#e6e6e6] bg-white p-1">
            <button
              type="button"
              aria-pressed={activeTab === "photos"}
              className={`rounded-full text-[16px] font-medium transition-colors ${
                activeTab === "photos" ? "bg-[#2587cf] text-white" : "text-[#242424]"
              }`}
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "videos"}
              className={`rounded-full text-[16px] font-medium transition-colors ${
                activeTab === "videos" ? "bg-[#2587cf] text-white" : "text-[#242424]"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>
        </header>

        {activeTab === "photos" ? (
          <section className="mt-[72px] grid grid-cols-1 gap-8 md:auto-rows-[250px] md:grid-cols-4">
            {photos.map((item) => (
              <figure
                key={`${item.src}-${item.alt}`}
                className={`h-[260px] overflow-hidden rounded-[14px] bg-[#d9d9d9] md:h-auto ${item.className}`}
              >
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover object-center" />
              </figure>
            ))}
          </section>
        ) : (
          <section className="mt-[72px] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {videos.map((item) => (
              <figure key={item.alt} className="relative h-[300px] overflow-hidden rounded-[14px] bg-[#d9d9d9] md:h-[316px]">
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/50" />
              </figure>
            ))}
          </section>
        )}
      </main>

      <footer className="flex h-[82px] items-center justify-center bg-white px-4 text-center text-[18px] font-normal text-[#4a4a4a]">
        © adeniyiadekoya2026
      </footer>
    </div>
  );
};

export default GalleryPage;
