import React from "react";
import { Button } from "./Button";
import Lottie from "lottie-react";
import LogoAnimation from "../src/logo.json";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 py-2 px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="w-24 md:w-32 cursor-pointer select-none">
          <Lottie animationData={LogoAnimation} loop={true} />
        </div>

        {/* Right: Links & CTA */}
        <div className="flex items-center space-x-8">
          <a
            href="#how-to-play"
            className="hidden md:block text-phekoo-grey hover:text-phekoo-blue font-medium text-sm transition-colors"
          >
            How to Play
          </a>
          <a
            href="#corporate-events"
            className="hidden md:block text-phekoo-grey hover:text-phekoo-blue font-medium text-sm transition-colors"
          >
            Corporate Events
          </a>
          <Button className="px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs shadow-none">
            Download App
          </Button>

          {/* Mobile Menu Icon (Visual Only) */}
          <button className="md:hidden text-phekoo-blue focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
