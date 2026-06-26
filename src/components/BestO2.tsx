import React from "react";
import { Wind, ArrowRight } from "lucide-react";
import Button from "./Button";
import { Plant } from "../types";

interface BestO2Props {
  onExploreClick?: (plant: Plant) => void;
  o2Plants: Plant[];
}

export default function BestO2({ onExploreClick, o2Plants }: BestO2Props) {
  const featuredO2 = o2Plants[0];

  return (
    <section id="best-o2" className="py-12 px-6 md:px-12 bg-forest-950">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Strip Banner */}
        <div className="rounded-[32px] bg-forest-900 border border-forest-800/25 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
          
          {/* Subtle overlay texture or glow */}
          <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Left content block with icon */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#08120e] border border-forest-800/10 flex items-center justify-center text-[#d8f3dc] shadow-md shrink-0">
              <Wind className="w-6 h-6 text-forest-600 animate-pulse" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
                We Have Small And Best O2 Plants Collection's
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#d8f3dc]/75 font-light leading-relaxed max-w-xl">
                Oxygen-producing plants, often referred to as "O2 plants," release pure active oxygen overnight, cleansing indoor air and filtering common household toxins.
              </p>
            </div>
          </div>

          {/* Right action button */}
          <div className="shrink-0 z-10 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => featuredO2 && onExploreClick?.(featuredO2)}
              className="w-full sm:w-auto bg-[#08120e] hover:bg-forest-800 text-[#d8f3dc] hover:text-white border-forest-800/30 font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 group-hover:border-forest-600 transition-all duration-300"
            >
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
