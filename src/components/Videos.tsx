import React, { useState } from 'react';
import { Play } from 'lucide-react';

const videoItems = [
  {
    id: 1,
    thumbnail: "/lovable-uploads/hero-img.webp",
    title: "Live Performance",
    videoId: "FXVgjFQpULo"
  },
  {
    id: 2,
    thumbnail: "/lovable-uploads/image1.webp",
    title: "Studio Session",
    videoId: "Gi90a4Ru53Q"
  },
  {
    id: 3,
    thumbnail: "/lovable-uploads/hero-img.webp",
    title: "Festival Performance",
    videoId: "Di_Q5DUQMTc"
  },
  {
    id: 4,
    thumbnail: "/lovable-uploads/image1.webp",
    title: "Drum Solo",
    videoId: "Y3fwE-J4oYb3qaxj"
  },
  {
    id: 5,
    thumbnail: "/lovable-uploads/hero-img.webp",
    title: "Collaboration",
    videoId: "Di_Q5DUQMTc"
  },
  {
    id: 6,
    thumbnail: "/lovable-uploads/image1.webp",
    title: "Rehearsal Session",
    videoId: "FXVgjFQpULo"
  },
  {
    id: 7,
    thumbnail: "/lovable-uploads/hero-img.webp",
    title: "Live Concert",
    videoId: "Di_Q5DUQMTc"
  },
  {
    id: 8,
    thumbnail: "/lovable-uploads/image1.webp",
    title: "Tutorial",
    videoId: "Y3fwE-J4oYb3qaxj"
  }
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="text-sm uppercase text-drum-gold font-medium mb-2">Video</h3>
          <h2 className="text-2xl md:text-3xl font-[500] mb-6">
            Live Sessions | Lessons | Practices
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videoItems.map((video, index) => (
            <div
              key={video.id}
              className="relative group animate-slide-up opacity-0 overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {activeVideo === video.videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                  title={video.title}
                  className="w-full aspect-video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img loading="lazy"
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => setActiveVideo(video.videoId)}
                  >
                    <div className="w-14 h-14 rounded-full bg-drum-gold flex items-center justify-center">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;