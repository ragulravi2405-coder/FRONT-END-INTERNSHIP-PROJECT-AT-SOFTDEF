import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-800/35 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-forest-800 text-white hover:bg-forest-700 shadow-md",
    secondary: "bg-forest-900 text-forest-800 border border-forest-800/10 hover:bg-forest-800/10",
    outline: "border border-forest-800/30 text-forest-800 hover:bg-forest-800/5 backdrop-blur-sm",
    gold: "bg-forest-800 text-white hover:bg-forest-700 font-semibold shadow-md shadow-forest-800/10",
    icon: "border border-forest-800/20 text-forest-800 bg-forest-900 hover:bg-forest-800 hover:text-white backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm md:text-base",
    lg: "px-8 py-3.5 text-base md:text-lg",
    icon: "p-2.5 rounded-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
