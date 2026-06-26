import React from "react";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import Button from "./Button";
import { Plant } from "../types";

interface TrendingPlantsProps {
  onExploreClick?: (plant: Plant) => void;
  onAddToCart?: (plant: Plant) => void;
  trendingPlants: Plant[];
}

export default function TrendingPlants({ onExploreClick, onAddToCart, trendingPlants }: TrendingPlantsProps) {
  return (
    <section id="trending" className="py-20 px-6 md:px-12 bg-forest-950">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <span className="font-sans text-xs font-semibold text-forest-600 tracking-widest uppercase block mb-1">
              Top Picks
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              Trending Now
            </h3>
          </div>
          <a 
            href="#top-selling" 
            className="font-sans text-xs md:text-sm font-semibold text-forest-600 hover:text-white transition-colors flex items-center gap-1.5"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Grid of Trending Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingPlants.map((plant) => (
            <div 
              key={plant.id} 
              className="group relative bg-forest-900 border border-forest-800/20 rounded-[24px] p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest-900/40"
            >
              {/* Plant Image Box */}
              <div className="relative w-full aspect-[4/3] rounded-[18px] bg-white border border-forest-800/10 flex items-center justify-center p-4 overflow-hidden mb-5">
                {plant.tag && (
                  <span className="absolute top-4 right-4 bg-forest-700 text-white font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                    {plant.tag}
                  </span>
                )}
                
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  referrerPolicy="no-referrer"
                  className="w-10/12 h-10/12 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Micro Ambient Glow */}
                <div className="absolute inset-0 bg-radial from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/5 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Plant Meta Details */}
              <div className="text-left mb-4">
                <span className="font-sans text-xs font-medium text-forest-600 tracking-wide uppercase mb-1 block">
                  {plant.category || "Indoor Plant"}
                </span>
                <h4 className="font-display text-lg md:text-xl font-bold text-white leading-tight mb-2 group-hover:text-forest-600 transition-colors">
                  {plant.name}
                </h4>
                <p className="font-sans text-xs md:text-sm text-[#d8f3dc]/70 font-light line-clamp-2 leading-relaxed">
                  {plant.description}
                </p>
              </div>

              {/* Price and Cart Button Row */}
              <div className="flex items-center justify-between pt-4 border-t border-forest-800/10 mt-auto">
                <div className="font-mono text-base md:text-lg font-bold text-white tracking-tight">
                  Rs. {plant.price}/-
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onExploreClick?.(plant)}
                    className="text-xs font-medium border-forest-800/20 text-[#d8f3dc]/80 hover:bg-forest-800 hover:text-white"
                  >
                    Details
                  </Button>
                  <button
                    onClick={() => onAddToCart?.(plant)}
                    className="w-9 h-9 rounded-xl bg-[#08120e] border border-forest-800/10 hover:border-forest-700 flex items-center justify-center text-[#d8f3dc] hover:text-white hover:bg-forest-800 transition-all duration-300 cursor-pointer shadow-sm"
                    aria-label={`Add ${plant.name} to cart`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
