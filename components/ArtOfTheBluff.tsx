import React, { useEffect, useRef, useState } from 'react';
import { PhoneScreenMode } from '../types';
import Img1 from '../src/1.png';
import Img2 from '../src/2.png';
import Img3 from '../src/3.png';
import Img4 from '../src/4.png';

const IMAGES = [Img1, Img2, Img3, Img4];

interface ImageMockupProps {
  src: string;
  className?: string;
  isDark?: boolean;
}

const ImageMockup: React.FC<ImageMockupProps> = ({ src, className = "", isDark = false }) => (
  <div className={`relative w-[300px] h-[600px] transition-transform duration-500 ease-out ${className}`}>
    {/* Phone Body */}
    <div className={`absolute inset-0 rounded-[40px] shadow-2xl border-4 overflow-hidden flex flex-col transition-colors duration-500 ${isDark ? 'bg-gray-900 border-white' : 'bg-white border-gray-100'}`}>
      <img src={src} className="w-full h-full object-cover" alt="Gameplay" />
    </div>
    {/* Phone Shadow/Reflection */}
    <div className="absolute -right-4 top-10 w-full h-[90%] bg-black/5 rounded-[40px] -z-10 blur-xl transform translate-x-4 translate-y-4"></div>
  </div>
);


export const ArtOfTheBluff: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const viewportHeight = window.innerHeight;

      const phase = Math.floor((scrollProgress + viewportHeight * 0.5) / viewportHeight);

      if (phase >= 0 && phase <= 3) {
        setActivePhase(phase);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const textSections = [
    {
      title: "We ask the weird questions.",
      subtitle: "From Hollywood Classics to obscure history. No boring facts allowed.",
      mode: PhoneScreenMode.QUESTION,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 text-phekoo-blue mb-4 md:mb-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v4l4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14h-8l-2 2-2-2H4V4h16v12z" />
          <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      )
    },
    {
      title: "You invent the truth.",
      subtitle: "Don't know the answer? Good. Lie. Be creative. Fool your friends.",
      mode: PhoneScreenMode.INPUT,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 text-phekoo-blue mb-4 md:mb-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      )
    },
    {
      title: "Spot the Phekoo.",
      subtitle: "All answers appear anonymously. Can you figure out who said what?",
      mode: PhoneScreenMode.VOTING,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 text-phekoo-blue mb-4 md:mb-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z" />
        </svg>
      )
    },
    {
      title: "The Mafia Twist.",
      subtitle: "One player knows all the answers. Find the rat before they steal the points.",
      mode: PhoneScreenMode.MAFIA,
      icon: (
        <div className="relative mb-4 md:mb-6">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="how-to-play" ref={containerRef} className="relative w-full bg-[#F9F9FB] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">

        {/* Left Column: Scrollable Narrative */}
        <div className="w-full md:w-1/2 relative z-10 pt-10 md:pt-0">
          {textSections.map((section, index) => (
            <div
              key={index}
              // Mobile: Normal padding, Stacked. Desktop: Full Screen Height, Centered.
              className={`flex flex-col justify-center px-6 md:px-16 transition-opacity duration-500 
                ${isMobile ? 'py-16 border-b border-gray-200 last:border-0' : `min-h-screen ${activePhase === index ? 'opacity-100' : 'opacity-30'}`}`}
            >
              <div className="transform transition-transform duration-700 delay-100">
                {section.icon}
              </div>
              <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4 ${index === 3 ? 'text-red-600' : 'text-phekoo-blue'}`}>
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md mb-8 md:mb-0">
                {section.subtitle}
              </p>

              {/* Mobile Only: Show the phone state inline for context */}
              <div className="md:hidden w-full flex justify-center mt-4">
                <div className="transform scale-90 origin-top">
                  <ImageMockup src={IMAGES[index]} className="h-[500px] !w-[260px]" isDark={index === 3} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Stage (Desktop Only) */}
        <div className="hidden md:block w-1/2 sticky top-0 h-screen">
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              {/* Circle decoration */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full filter blur-3xl transition-colors duration-1000 ${activePhase === 3 ? 'bg-red-500/10' : 'bg-blue-200/30'
                }`}></div>

              <ImageMockup
                src={IMAGES[activePhase]}
                className="transform scale-110"
                isDark={activePhase === 3}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};