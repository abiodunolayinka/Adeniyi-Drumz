import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { imageUrl } from "../lib/image";

const mediaItems = [
  {
    title: "Interview With Leadership Newspaper",
    description:
      "Adeniyi Adekoya, also known as Adeniyi Drumz, has become a well-known name in Nigeria's music scene......",
    link: "https://leadership.ng/adeniyi-drumz-from-makeshift-drums-to-global-stage/",
  },
  {
    title: "Nigeria Tribune Newspaper Feature",
    description:
      "Nigerian-born drummer and cultural advocate, Adeniyi Adekoya, has hosted the debut edition of Drum Dialogue & Rhythm Exchange in Sheffield, United Kingdom...",
    link: "https://tribuneonlineng.com/nigerian-born-adeniyi-drumz-hosts-drum-dialogue-rhythm-exchange-in-sheffield-uk/",
  },
  {
    title: "Interview With Trust Radio",
    description:
      "Adeniyi Adekoya, known professionally as Adeniyi Drumz, is a Nigerian-born talented drummer making waves in the United Kingdom's entertainment scene...",
    link: "https://trustradio.com.ng/en/adeniyi-drumz-the-nigerian-born-drummer-making-waves-in-the-uk-entertainment-scene",
  },
  {
    title: "Adeniyi Drumz In Sheffield",
    description:
      "Adeniyi Drumz Set to Captivate Sheffield with Drums Dialogue & Rhythm Exchange...",
    link: "https://www.thisdaylive.com/index.php/2025/03/14/adeniyi-drumz-set-to-captivate-sheffield-with-drums-dialogue-rhythm-exchange/",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white text-[#242424]">
      <Navbar />
      <main className="mx-auto max-w-[1280px] px-6 pb-20 pt-[122px] sm:px-10 lg:px-16">
        <div className="text-center">
          <p className="text-[24px] font-medium uppercase leading-none tracking-normal">Features</p>
          <h1 className="mt-5 text-[32px] font-bold leading-none tracking-normal sm:text-[48px]">
            As Seen In The Media
          </h1>
        </div>

        <div className="mt-12 items-center gap-14 flex flex-col md:flex-row md:justify-between">
          <div className="overflow-hidden rounded-[26px] bg-[#d9d9d9] h-[290px] md:h-[540px] w-full md:max-w-[480px] lg:h-[850px]">
            <img
              src={imageUrl("image7")}
              alt="Adeniyi Adekoya standing beside blue drums"
              className="w-full md:max-w-full object-cover object-[48%_50%] h-[850px] "
            />
          </div>

          <div className="pt-7 max-w-[600px]">
            {mediaItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[1fr_44px] gap-6 border-b border-[#2f2f2f] py-[28px] transition-opacity hover:opacity-75 first:pt-0"
              >
                <span>
                  <span className="block text-[24px] font-medium leading-[1.15] tracking-normal text-[#242424] sm:text-[32px]">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-[14px] font-normal leading-[1.45] text-[#8a8a8a] sm:text-[16px]">
                    {item.description}
                  </span>
                </span>
                <span className="flex items-center justify-center pt-2 text-[#242424]">
                  <ChevronRight className="h-9 w-9" strokeWidth={3} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex h-[82px] items-center justify-center bg-white px-4 text-center text-[18px] font-normal text-[#4a4a4a]">
        © adeniyiadekoya2026
      </footer>
    </div>
  );
};

export default Features;
