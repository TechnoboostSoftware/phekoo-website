import React from 'react';
import AppBadge from '../src/app.png';
import PlayBadge from '../src/play.png';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-full bg-phekoo-blue flex flex-col justify-center relative overflow-hidden text-white px-6 md:px-20 py-16 md:py-20">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center z-10">

        {/* Left Column: CTA */}
        <div className="space-y-8 md:space-y-10 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-8xl font-sans font-bold tracking-tighter leading-none">
              START <br />
              <span className="glitch-text cursor-default inline-block transition-colors duration-200">LYING</span> TODAY.
            </h2>
            <p className="text-lg md:text-2xl opacity-80 font-serif max-w-md pt-4 mx-auto md:mx-0">
              No logins. No passwords. Just scan and roast your friends.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center md:justify-start">
            <a href="#" className="transform hover:scale-105 transition-transform duration-200 w-40 md:w-44">
              <img src={AppBadge} alt="Download on App Store" className="w-full h-auto" />
            </a>
            <a href="#" className="transform hover:scale-105 transition-transform duration-200 w-40 md:w-44">
              <img src={PlayBadge} alt="Get it on Google Play" className="w-full h-auto" />
            </a>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 text-sm opacity-50 pt-8">
            <a href="#" className="hover:opacity-100 hover:text-phekoo-coral transition-colors">Terms of Service</a>
            <a href="#" className="hover:opacity-100 hover:text-phekoo-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:text-phekoo-coral transition-colors">HR Contact</a>
          </div>
        </div>

        {/* Right Column: Giant QR Code */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-white rounded-3xl p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
            {/* QR Code Pattern Generator (Simulated) */}
            <div className="w-full h-full bg-phekoo-blue/5 grid grid-cols-12 grid-rows-12 gap-1 rounded-xl overflow-hidden p-2">
              {/* Randomly generate pixel blocks */}
              {Array.from({ length: 144 }).map((_, i) => {
                // Create a pseudo-QR pattern
                const isCorner = (i < 36 && i % 12 < 3) || (i > 108 && i % 12 < 3) || (i < 36 && i % 12 > 8);
                const isRandom = Math.random() > 0.5;
                const colorClass = isCorner ? 'bg-phekoo-coral' : isRandom ? 'bg-phekoo-blue' : 'bg-transparent';
                return (
                  <div key={i} className={`${colorClass} rounded-sm transition-colors duration-300 group-hover:scale-90`}></div>
                )
              })}
            </div>
          </div>
          <p className="font-mono text-phekoo-coral font-bold tracking-widest text-sm uppercase animate-pulse">
            Scan to Host Instantly
          </p>
        </div>

      </div>

      {/* Easter Egg */}
      <div className="absolute bottom-2 md:bottom-4 w-full text-center md:text-right md:right-6 opacity-20 text-[10px] font-mono hover:opacity-100 transition-opacity">
        © 2025 Phekoo. We know what you did last summer.
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};