import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { Plant } from "../types";

interface BestO2Props {
  onExploreClick?: (plant: Plant) => void;
  o2Plants: Plant[];
}

export default function BestO2({ onExploreClick, o2Plants }: BestO2Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlant = o2Plants[currentIndex] || o2Plants[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % o2Plants.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + o2Plants.length) % o2Plants.length);
  };

  return (
    <section id="best-o2" className="py-20 px-6 md:px-12 bg-forest-950">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Panel */}
        {currentPlant && (
          <div className="rounded-[40px] bg-forest-800 border border-forest-800/25 p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center shadow-xl">
            
            {/* Left Column: Big Potted Plant */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center bg-forest-950/10 rounded-full border border-[#D8F3DC]/10 shadow-2xl overflow-hidden group">
                <img
                  src={currentPlant.imageUrl}
                  alt={currentPlant.name}
                  referrerPolicy="no-referrer"
                  className="w-10/12 h-11/12 object-contain transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                />
                
                {/* Backdrop ambient radial glow */}
                <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent -z-10" />
              </div>
            </div>

            {/* Right Column: Copy & Interactive Controls */}
            <div className="md:col-span-7 flex flex-col items-start text-left gap-6">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[#D8F3DC] leading-tight">
                We Have Small And Best O2 Plants Collection's
              </h3>
              
              <div className="flex flex-col gap-4 font-sans text-sm md:text-base text-[#D8F3DC]/85 font-light leading-relaxed max-w-xl">
                <p>
                  Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                </p>
                <p>
                  Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                </p>
              </div>

              {/* Controls Row */}
              <div className="flex flex-wrap items-center justify-between w-full border-t border-[#D8F3DC]/15 pt-6 mt-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => onExploreClick?.(currentPlant)}
                  className="bg-[#D8F3DC] text-[#1B4332] hover:bg-[#B7E4C7] border-none font-bold shadow-md"
                >
                  Explore
                </Button>

                {/* Arrow Controls with page count */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-forest-950/10 border border-[#D8F3DC]/20 text-[#D8F3DC] hover:bg-[#D8F3DC] hover:text-forest-800 hover:border-transparent transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Previous O2 plant"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="font-mono text-sm md:text-base font-bold text-[#D8F3DC]">
                    {String(currentIndex + 1).padStart(2, "0")}/{String(o2Plants.length).padStart(2, "0")}
                  </span>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-forest-950/10 border border-[#D8F3DC]/20 text-[#D8F3DC] hover:bg-[#D8F3DC] hover:text-forest-800 hover:border-transparent transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Next O2 plant"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Pagination Dots Indicator under the panel */}
        <div className="flex items-center justify-center gap-2">
          {o2Plants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-forest-800" : "w-2.5 bg-forest-900 hover:bg-forest-800/30"
              }`}
              aria-label={`Go to O2 plant ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
