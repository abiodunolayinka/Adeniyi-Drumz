import React from "react";
import { ExternalLink } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    image: "/lovable-uploads/image1.webp",
    title: "Interview with Leadership Newspaper",
    description: "Adeniyi Drumz: From Makeshift Drums To Global Stage...",
    link: "https://leadership.ng/adeniyi-drumz-from-makeshift-drums-to-global-stage/",
  },
  {
    id: 2,
    image: "/lovable-uploads/image3.webp",
    title: "Nigeria Tribune Newspaper Feature",
    description:
      "Nigerian-born Adeniyi Drumz hosts drum dialogue, rhythm exchange in Sheffield, UK ...",
    link: "https://tribuneonlineng.com/nigerian-born-adeniyi-drumz-hosts-drum-dialogue-rhythm-exchange-in-sheffield-uk/",
  },
  {
    id: 3,
    image: "/lovable-uploads/image5.webp",
    title: "Interview with Trust Radio",
    description:
      "Adeniyi Drumz: The Nigerian-born Drummer Making waves in the UK entertainment scene ...",
    link: "https://trustradio.com.ng/en/adeniyi-drumz-the-nigerian-born-drummer-making-waves-in-the-uk-entertainment-scene",
  },
  {
    id: 4,
    image: "/lovable-uploads/image2.webp",
    title: "Adeniyi Drumz in Sheffield",
    description:
      "Adeniyi Drumz Set to Captivate Sheffield with Drums Dialogue & Rhythm Exchange...",
    link: "https://www.thisdaylive.com/index.php/2025/03/14/adeniyi-drumz-set-to-captivate-sheffield-with-drums-dialogue-rhythm-exchange/",
  },
];

const Media = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-sm uppercase text-drum-gold font-medium mb-2">
            Blog
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            As seen in the media
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

                <a
                  href={item.link}
                  className="inline-flex items-center text-drum-gold hover:underline"
                >
                  Read more <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
