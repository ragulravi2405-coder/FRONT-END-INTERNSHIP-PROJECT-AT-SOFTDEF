import React, { useState } from "react";
import { Play, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Button from "./Button";
import { Plant } from "../types";

interface HeroBannerProps {
  onBuyNowClick?: (plant: Plant) => void;
  featuredPlants: Plant[];
}

export default function HeroBanner({ onBuyNowClick, featuredPlants }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlant = featuredPlants[currentIndex] || featuredPlants[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPlants.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPlants.length) % featuredPlants.length);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-forest-950">
      {/* Large plant background image */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-20 md:opacity-30 pointer-events-none z-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200')`,
          mixBlendMode: 'screen'
        }}
      />

      {/* Blurry organic glows / background topiary */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative large blurry plant in background center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
        <div className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full bg-forest-600/15 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
              Earth’s <span className="text-forest-600">Exhale</span>
            </h1>
            <p className="font-sans text-sm md:text-base text-[#d8f3dc]/80 font-light max-w-lg leading-relaxed">
              "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-6">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onBuyNowClick?.(currentPlant)}
              className="bg-forest-700 hover:bg-forest-600 border-none text-white font-semibold shadow-xl shadow-emerald-950/40 px-8 py-4 rounded-full"
            >
              Shop Collection
            </Button>
            
            <button className="flex items-center gap-3 text-white hover:text-[#d8f3dc] transition-colors duration-300 font-sans font-medium text-sm md:text-base group cursor-pointer">
              <span className="w-12 h-12 rounded-full border border-forest-800/30 group-hover:border-forest-600 flex items-center justify-center transition-all bg-forest-900/80">
                <Play className="w-4 h-4 fill-current ml-0.5 text-[#d8f3dc]" />
              </span>
              Live Demo...
            </button>
          </div>

          {/* Mini Testimonial Box */}
          <div className="mt-8 max-w-sm rounded-2xl bg-forest-900 border border-forest-800/20 p-5 flex flex-col gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
                alt="Ronnie Hamill"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-forest-800/30"
              />
              <div>
                <h4 className="font-display text-sm font-medium text-white leading-none mb-1">
                  Ronnie Hamill
                </h4>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="font-sans text-xs md:text-sm text-[#d8f3dc]/80 font-light leading-relaxed">
              "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
            </p>
          </div>
        </div>

        {/* Right Column (Featured Carousel) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px]">
            {/* The main featured plant container */}
            <div className="relative rounded-[40px] bg-forest-900 border border-forest-800/20 p-8 flex flex-col items-center shadow-2xl transition-all duration-500 hover:border-forest-700/40">
              {/* Product Category */}
              <span className="font-sans text-xs font-semibold text-forest-600 tracking-widest uppercase mb-1">
                {currentPlant.category || "Indoor Plant"}
              </span>
              
              {/* Product Title */}
              <h3 className="font-display text-2xl font-semibold text-white mb-6 text-center">
                {currentPlant.name}
              </h3>

              {/* Product Image */}
              <div className="relative w-full aspect-square mb-8 flex items-center justify-center bg-white rounded-3xl p-4 border border-forest-800/10">
                <img
                  src={currentPlant.imageUrl}
                  alt={currentPlant.name}
                  referrerPolicy="no-referrer"
                  className="w-10/12 h-10/12 object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                />
                
                {/* Backdrop ambient radial glow */}
                <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent -z-10" />
              </div>

              {/* Buy Button */}
              <Button
                variant="outline"
                className="w-full font-sans tracking-wide hover:bg-forest-800 hover:text-white border-forest-800/30 text-[#d8f3dc] font-semibold"
                onClick={() => onBuyNowClick?.(currentPlant)}
              >
                Buy Now
              </Button>

              {/* Slider Dots Indicator */}
              <div className="flex items-center gap-2 mt-6">
                {featuredPlants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex ? "w-6 bg-forest-700" : "w-2.5 bg-forest-950 hover:bg-forest-800"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slider Next Navigation Controls */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest-800 border border-forest-700 flex items-center justify-center text-white hover:bg-forest-700 shadow-xl transition-all duration-300 cursor-pointer z-20"
              aria-label="Next plant"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
