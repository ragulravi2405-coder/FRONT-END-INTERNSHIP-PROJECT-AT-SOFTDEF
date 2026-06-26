import React from "react";
import { Star } from "lucide-react";
import { Review } from "../types";

interface TestimonialCardProps {
  review: Review;
  key?: React.Key;
}

export default function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <div className="rounded-[30px] bg-forest-900 border border-forest-800/20 p-6 md:p-8 flex flex-col gap-4 text-left hover:bg-forest-950/50 transition-all duration-300 shadow-xl shadow-forest-950/10">
      {/* Header Profile Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.avatarUrl}
          alt={review.name}
          referrerPolicy="no-referrer"
          className="w-12 h-12 rounded-full object-cover border-2 border-forest-800/20 shadow-sm"
        />
        <div>
          <h4 className="font-display text-base md:text-lg font-bold text-white leading-none mb-1.5">
            {review.name}
          </h4>
          
          {/* Star Rating Row */}
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 fill-current ${
                  index < review.rating ? "text-amber-500" : "text-forest-800/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimony Message */}
      <p className="font-sans text-xs md:text-sm text-[#d8f3dc]/75 font-light leading-relaxed italic">
        "{review.comment}"
      </p>
    </div>
  );
}
