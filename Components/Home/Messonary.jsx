import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MasonryGrid = () => {
  const images = [
    {
      id: 1,
      title: "MRI Scan",
      desc: "Advanced MRI diagnostics with accurate reporting.",
      height: "h-[300px] sm:h-[420px]",
      url: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
    },
    {
      id: 2,
      title: "Blood Test",
      desc: "Fast and reliable pathology services.",
      height: "h-[220px] sm:h-[260px]",
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    },
    {
      id: 3,
      title: "CT Scan",
      desc: "Modern CT scan technology for precise imaging.",
      height: "h-[250px] sm:h-[350px]",
      url: "https://images.unsplash.com/photo-1693264882139-6a308957c9ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Laboratory",
      desc: "Certified diagnostic laboratory facilities.",
      height: "h-[250px] sm:h-[300px]",
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    },
    {
      id: 5,
      title: "Ultrasound",
      desc: "Safe and high-quality ultrasound services.",
      height: "h-[220px] sm:h-[300px]",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      id: 6,
      title: "Health Checkup",
      desc: "Complete health screening packages available.",
      height: "h-[260px] sm:h-[380px]",
      url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="w-[95%] sm:w-11/12 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold text-cyan-400 mt-3">
            Advanced Diagnostic Care
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Experience modern healthcare diagnostics with cutting-edge
            technology, expert professionals, and accurate results you can trust.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className={`
                  w-full
                  ${image.height}
                  object-cover
                  rounded-2xl
                  transition-all duration-700
                  group-hover:scale-110
                `}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-cyan-700/60 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {image.title}
                </h3>

                <p className="text-sm text-gray-200 mt-2 leading-relaxed">
                  {image.desc}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium group/btn">
                  Learn More
                  <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGrid;