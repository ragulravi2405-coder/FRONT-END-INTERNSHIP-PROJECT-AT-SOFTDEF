import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Left Gold Bracket */}
      <svg
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold h-10 md:h-14 w-auto shrink-0"
      >
        <path
          d="M14 2H2V54H14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Title Text */}
      <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center">
        {children}
      </h2>

      {/* Right Gold Bracket */}
      <svg
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold h-10 md:h-14 w-auto shrink-0"
      >
        <path
          d="M2 2H14V54H2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
