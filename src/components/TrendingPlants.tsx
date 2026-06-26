import React from "react";
import { ShoppingBag } from "lucide-react";
import Button from "./Button";
import { Plant } from "../types";

interface TrendingPlantsProps {
  onExploreClick?: (plant: Plant) => void;
  onAddToCart?: (plant: Plant) => void;
  trendingPlants: Plant[];
}

export default function TrendingPlants({ onExploreClick, onAddToCart, trendingPlants }: TrendingPlantsProps) {
  const firstPlant = trendingPlants[0];
  const secondPlant = trendingPlants[1];

  return (
    <section id="trending" className="py-20 px-6 md:px-12 bg-forest-950">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Banner 1: Image Left, Content Right */}
        {firstPlant && (
          <div className="rounded-[40px] bg-forest-900 border border-forest-800/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-forest-700/20 transition-colors duration-500 shadow-sm">
            {/* Left Image Arch */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] aspect-square rounded-[100px] rounded-bl-[20px] bg-white border border-forest-800/10 flex items-center justify-center p-6 shadow-sm relative overflow-hidden group">
                <img
                  src={firstPlant.imageUrl}
                  alt={firstPlant.name}
                  referrerPolicy="no-referrer"
                  className="w-11/12 h-11/12 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-radial from-emerald-500/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-7 flex flex-col items-start text-left gap-4">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-forest-800 tracking-tight">
                For Your Desks Decorations
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-800/80 font-light leading-relaxed max-w-xl">
                {firstPlant.description}
              </p>
              
              <div className="font-mono text-xl md:text-2xl font-bold text-forest-800 tracking-tight mt-2">
                Rs. {firstPlant.price}/-
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => onExploreClick?.(firstPlant)}
                  className="hover:bg-forest-800 hover:text-white font-semibold"
                >
                  Explore
                </Button>
                <button
                  onClick={() => onAddToCart?.(firstPlant)}
                  className="w-12 h-12 rounded-xl bg-[#FDFDFB] border border-forest-800/10 hover:border-forest-700 flex items-center justify-center text-forest-800 hover:text-white hover:bg-forest-800 transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label={`Add ${firstPlant.name} to cart`}
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Banner 2: Content Left, Image Right */}
        {secondPlant && (
          <div className="rounded-[40px] bg-forest-900 border border-forest-800/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-forest-700/20 transition-colors duration-500 shadow-sm">
            {/* Left Content (Flipped Layout) */}
            <div className="md:col-span-7 md:order-1 order-2 flex flex-col items-start text-left gap-4">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-forest-800 tracking-tight">
                For Your Desks Decorations
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-800/80 font-light leading-relaxed max-w-xl">
                {secondPlant.description}
              </p>
              
              <div className="font-mono text-xl md:text-2xl font-bold text-forest-800 tracking-tight mt-2">
                Rs. {secondPlant.price}/-
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => onExploreClick?.(secondPlant)}
                  className="hover:bg-forest-800 hover:text-white font-semibold"
                >
                  Explore
                </Button>
                <button
                  onClick={() => onAddToCart?.(secondPlant)}
                  className="w-12 h-12 rounded-xl bg-[#FDFDFB] border border-forest-800/10 hover:border-forest-700 flex items-center justify-center text-forest-800 hover:text-white hover:bg-forest-800 transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label={`Add ${secondPlant.name} to cart`}
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Image Arch */}
            <div className="md:col-span-5 md:order-2 order-1 flex justify-center">
              <div className="w-full max-w-[280px] aspect-square rounded-[100px] rounded-bl-[20px] bg-white border border-forest-800/10 flex items-center justify-center p-6 shadow-sm relative overflow-hidden group">
                <img
                  src={secondPlant.imageUrl}
                  alt={secondPlant.name}
                  referrerPolicy="no-referrer"
                  className="w-11/12 h-11/12 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-radial from-emerald-500/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
