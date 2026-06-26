import React from "react";
import { ShoppingBag } from "lucide-react";
import { Plant } from "../types";

interface PlantCardProps {
  plant: Plant;
  onAddToCart?: (plant: Plant) => void;
  key?: React.Key;
}

export default function PlantCard({ plant, onAddToCart }: PlantCardProps) {
  return (
    <div className="group relative flex flex-col justify-between h-full rounded-[24px] bg-forest-900 border border-forest-800/20 p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest-950/40 shadow-md">
      {/* Plant Image Container */}
      <div className="relative w-full aspect-square mb-5 rounded-[18px] overflow-hidden flex items-center justify-center bg-white border border-forest-800/10">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          referrerPolicy="no-referrer"
          className="w-10/12 h-10/12 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        
        {/* Glow behind image on hover */}
        <div className="absolute inset-0 bg-radial from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/5 transition-all duration-500" />
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {plant.category && (
            <span className="font-sans text-xs font-semibold text-forest-600 tracking-widest uppercase block mb-1">
              {plant.category}
            </span>
          )}
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 leading-snug group-hover:text-forest-600 transition-colors">
            {plant.name}
          </h3>
          <p className="font-sans text-xs md:text-sm text-[#d8f3dc]/70 line-clamp-3 mb-6 font-light leading-relaxed">
            {plant.description}
          </p>
        </div>

        {/* Footer Area of the card */}
        <div className="flex items-center justify-between pt-4 border-t border-forest-800/10">
          <span className="font-mono text-base md:text-lg font-bold text-white tracking-tight">
            Rs. {plant.price}/-
          </span>
          
          <button
            onClick={() => onAddToCart?.(plant)}
            className="w-10 h-10 rounded-xl bg-[#08120e] border border-forest-800/10 hover:border-forest-700 flex items-center justify-center text-[#d8f3dc] hover:text-white hover:bg-forest-800 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label={`Add ${plant.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
