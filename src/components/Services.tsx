import React from "react";
import { Music, VideoIcon, GraduationCap } from "lucide-react";

const serviceItems = [
  {
    title: "Live Performance",
    description: "High-energy live drumming for concerts and events",
    icon: Music,
  },
  {
    title: "Studio Sessions",
    description: "Professional studio recording services",
    icon: VideoIcon,
  },
  {
    title: "Drum Lessons",
    description: "Personalized drum lessons for all skill levels",
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white  mx-auto">
      <div className="px-4 sm:px-6 lg:px-20 py-[40px] lg:py-[65px]  mx-auto max-w-[1200px] bg-black md:rounded-3xl">
        <div className="text-center md:w-[365px] mb-10 mx-auto">
          <h3 className="text-sm  text-[#FFFFFF] font-normal mb-2">Services</h3>
          <h2 className="text-2xl font-normal mb-2 text-white">
            Always ready to provide these services for you
          </h2>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white w-[259px] h-[209px] p-8 rounded-[16px] hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 text-black">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-normal mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light">{service.description}</p>
            </div>
          ))}
        </div> */}
        <div className="md:flex  justify-center items-center gap-2.5   ">
          <div className="bg-white md:w-[504px] h-[209px] md:h-[428px] mb-2 md:mb-0 p-8 rounded-[16px] hover:scale-105 transition-all duration-300">
            <div className="mb-4 text-black"></div>
            <h3 className="text-xl font-normal mb-3 text-black">Trainings</h3>
            <p className="text-gray-600 font-light md:w-[309px]">
              I have a planned out schedule for people interested in learning.
              contact me
            </p>
          </div>
          
          <div className="flex flex-col gap-2 md:mb-0 mb-2" >
            <div className="bg-white md:w-[259px]  h-[209px] p-8 rounded-[16px] hover:scale-105 transition-all duration-300">
              <div className="mb-4 text-black"></div>
              <h3 className="text-xl font-normal mb-3 text-black">Gospel Concerts</h3>
              <p className="text-gray-600 font-light ">
               Team of instrumentalists
              </p>
            </div>
            <div className="bg-white md:w-[259px]  h-[209px] p-8 rounded-[16px] hover:scale-105 transition-all duration-300">
              <div className="mb-4 text-black"></div>
              <h3 className="text-xl font-normal mb-3 text-black">Trainings</h3>
              <p className="text-gray-600 font-light ">
              Touring the world of music
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:mb-0 mb-2">
            <div className="bg-white md:w-[259px]  h-[209px] p-8 rounded-[16px] hover:scale-105 transition-all duration-300">
              <div className="mb-4 text-black"></div>
              <h3 className="text-xl font-normal mb-3 text-black">Bookings</h3>
              <p className="text-gray-600 font-light ">
              Contact me to book for
              </p>
            </div>
            <div className="bg-white md:w-[259px]  h-[209px] p-8 rounded-[16px] hover:scale-105 transition-all duration-300">
              <div className="mb-4 text-black"></div>
              <h3 className="text-xl font-normal mb-3 text-black">Trainings</h3>
              <p className="text-gray-600 font-light ">
              I have a planned out schedule for people interested in learning. contact me
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
