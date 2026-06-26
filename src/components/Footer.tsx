import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="bg-forest-900 border-t border-forest-800/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-forest-800/10">
        {/* Brand Info */}
        <div className="flex flex-col gap-6 text-left">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 flex items-center justify-center shadow-md">
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
          <p className="font-sans text-sm md:text-base text-forest-800/80 font-light leading-relaxed max-w-sm">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          <div className="flex items-center gap-6 mt-2">
            <a
              href="#"
              className="font-display text-sm font-semibold tracking-wider text-forest-800 hover:text-forest-700 transition-colors"
            >
              FB
            </a>
            <a
              href="#"
              className="font-display text-sm font-semibold tracking-wider text-forest-800 hover:text-forest-700 transition-colors"
            >
              TW
            </a>
            <a
              href="#"
              className="font-display text-sm font-semibold tracking-wider text-forest-800 hover:text-forest-700 transition-colors"
            >
              LI
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 text-left md:pl-12">
          <h4 className="font-display text-base md:text-lg font-medium text-forest-800 tracking-wide">
            Quick Link's
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="font-sans text-sm text-forest-800/80 hover:text-forest-800 transition-colors font-light"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#top-selling"
                className="font-sans text-sm text-forest-800/80 hover:text-forest-800 transition-colors font-light"
              >
                Type's Of plant's
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="font-sans text-sm text-forest-800/80 hover:text-forest-800 transition-colors font-light"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-sans text-sm text-forest-800/80 hover:text-forest-800 transition-colors font-light"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-6 text-left">
          <h4 className="font-display text-base md:text-lg font-medium text-forest-800 tracking-wide">
            For Every Update.
          </h4>
          <form onSubmit={handleSubmit} className="flex max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="flex-1 bg-transparent border border-forest-800/30 rounded-l-md px-4 py-2.5 text-sm text-forest-800 placeholder-forest-800/40 focus:outline-none focus:border-forest-800 transition-colors"
            />
            <button
              type="submit"
              className="bg-forest-800 hover:bg-forest-700 text-white font-sans text-xs md:text-sm font-bold px-5 py-2.5 rounded-r-md transition-all cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <span className="font-sans text-xs text-neutral-500 font-light">
          FloraVision © all right reserve
        </span>
      </div>
    </footer>
  );
}
