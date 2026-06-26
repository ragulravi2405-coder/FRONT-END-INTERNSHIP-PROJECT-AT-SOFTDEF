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
    <div className="group relative flex flex-col justify-between h-full rounded-t-[80px] rounded-b-[20px] bg-white border border-forest-800/10 hover:border-forest-700/30 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/5 shadow-sm">
      {/* Plant Image Container */}
      <div className="relative w-full aspect-square mb-6 rounded-t-[60px] overflow-hidden flex items-center justify-center bg-forest-900 border border-forest-800/5">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          referrerPolicy="no-referrer"
          className="w-11/12 h-11/12 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        
        {/* Glow behind image on hover */}
        <div className="absolute inset-0 bg-radial from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/5 transition-all duration-500" />
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {plant.category && (
            <span className="font-sans text-xs font-semibold text-forest-700 tracking-widest uppercase block mb-1">
              {plant.category}
            </span>
          )}
          <h3 className="font-display text-lg md:text-xl font-medium text-forest-800 mb-2 leading-snug group-hover:text-forest-700 transition-colors">
            {plant.name}
          </h3>
          <p className="font-sans text-sm text-forest-800/70 line-clamp-3 mb-6 font-light leading-relaxed">
            {plant.description}
          </p>
        </div>

        {/* Footer Area of the card */}
        <div className="flex items-center justify-between pt-4 border-t border-forest-800/10">
          <span className="font-mono text-base md:text-lg font-bold text-forest-800 tracking-tight">
            Rs. {plant.price}/-
          </span>
          
          <button
            onClick={() => onAddToCart?.(plant)}
            className="w-10 h-10 rounded-xl bg-forest-900 border border-forest-800/10 hover:border-forest-700 flex items-center justify-center text-forest-800 hover:text-white hover:bg-forest-800 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label={`Add ${plant.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
