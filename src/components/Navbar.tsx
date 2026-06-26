import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ cartCount = 0, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-forest-950/90 backdrop-blur-md border-b border-forest-800/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          {/* Custom Leaf Icon to match the brand logo */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 flex items-center justify-center shadow-lg shadow-emerald-950/10 group-hover:scale-105 transition-transform">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
              <path d="M9 22v-4h4" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-forest-800">
            FloraVision<span className="text-forest-700">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#"
            className="font-sans text-sm font-medium text-forest-800 hover:text-forest-700 transition-colors"
          >
            Home
          </a>

          {/* Dropdown Link */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className="flex items-center gap-1.5 font-sans text-sm font-medium text-forest-800/80 hover:text-forest-800 transition-colors cursor-pointer"
            >
              Plants Type
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-white border border-forest-800/10 p-2 shadow-2xl backdrop-blur-xl animate-fade-in"
              >
                <a
                  href="#top-selling"
                  className="block px-4 py-2 text-sm rounded-lg text-forest-800/80 hover:text-forest-800 hover:bg-forest-900 transition-all"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Indoor Plants
                </a>
                <a
                  href="#top-selling"
                  className="block px-4 py-2 text-sm rounded-lg text-forest-800/80 hover:text-forest-800 hover:bg-forest-900 transition-all"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Trending Succulents
                </a>
                <a
                  href="#best-o2"
                  className="block px-4 py-2 text-sm rounded-lg text-forest-800/80 hover:text-forest-800 hover:bg-forest-900 transition-all"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  O₂ Plants
                </a>
              </div>
            )}
          </div>

          <a
            href="#reviews"
            className="font-sans text-sm font-medium text-forest-800/80 hover:text-forest-800 transition-colors"
          >
            More
          </a>
          <a
            href="#footer"
            className="font-sans text-sm font-medium text-forest-800/80 hover:text-forest-800 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Actions (Search, Cart, Menu) */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-forest-800 hover:text-forest-700 transition-colors p-2 cursor-pointer" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onCartClick}
            className="text-forest-800 hover:text-forest-700 transition-colors p-2 relative cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-forest-800 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-forest-800 hover:text-forest-700 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 border-b border-forest-800/10 p-6 flex flex-col gap-4 shadow-xl backdrop-blur-lg animate-fade-in">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-forest-800 hover:text-forest-700 py-2 border-b border-forest-800/10"
          >
            Home
          </a>
          <div>
            <span className="font-sans text-base font-medium text-forest-800/60 block py-1">
              Plants Type:
            </span>
            <div className="pl-4 flex flex-col gap-2 mt-2">
              <a
                href="#top-selling"
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm text-forest-800/80 hover:text-forest-700"
              >
                • Indoor Plants
              </a>
              <a
                href="#top-selling"
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm text-forest-800/80 hover:text-forest-700"
              >
                • Trending Succulents
              </a>
              <a
                href="#best-o2"
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm text-forest-800/80 hover:text-forest-700"
              >
                • O₂ Plants
              </a>
            </div>
          </div>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-forest-800 hover:text-forest-700 py-2 border-b border-forest-800/10"
          >
            More
          </a>
          <a
            href="#footer"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-forest-800 hover:text-forest-700 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
