import React, { useEffect, useState } from 'react';
import { FloatingElements } from './FloatingElements';
import HeroImage from '../src/hero.png';
import HeroBg from '../src/hero-bg.png';
import AppBadge from '../src/app.png';
import PlayBadge from '../src/play.png';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:h-[110vh] bg-phekoo-bg overflow-hidden flex flex-col">

      {/* Background Image */}
      <img
        src={HeroBg}
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none z-0"
        alt=""
      />

      {/* Layer 1: The Backdrop (Slowest) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <h1 className="text-[25vw] font-bold leading-none text-outline opacity-20 tracking-tighter mt-20 md:mt-0">
          BLUFF
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex-1 w-full relative flex flex-col md:flex-row items-center px-6 pt-28 md:pt-0">

        {/* Layer 2: The Copy (Normal Speed) */}
        <div
          className="flex-1 z-10 space-y-6 md:space-y-8 md:pr-12 text-center md:text-left"
          style={{ transform: `translateY(${window.innerWidth > 768 ? scrollY * -0.1 : 0}px)` }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-phekoo-blue leading-[1.1]">
            <span className="whitespace-nowrap">Google Can't</span> <br />
            <span className="whitespace-nowrap">
              <span className="relative inline-block">
                Save
                {/* Hand-drawn underline SVG */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 md:h-4 text-phekoo-coral" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C25.6183 2.65175 119.262 -2.12276 198.001 2.99999" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span> You.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-phekoo-grey font-sans font-medium max-w-lg leading-relaxed mx-auto md:mx-0">
            The social party game where facts don't matter and lying is your superpower.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full md:w-auto">
            <a href="#" className="transform hover:scale-105 transition-transform duration-200 w-40 md:w-44">
              <img src={AppBadge} alt="Download on App Store" className="w-full h-auto" />
            </a>
            <a href="#" className="transform hover:scale-105 transition-transform duration-200 w-40 md:w-44">
              <img src={PlayBadge} alt="Get it on Google Play" className="w-full h-auto" />
            </a>
          </div>
        </div>

        {/* Layer 3: The Hero Visual (Lag + 3D Rotation) */}
        <div className="flex-1 flex justify-center md:justify-end z-10 mt-16 md:mt-0 perspective-container relative w-full pb-20 md:pb-0">
          {/* 
                Use nested divs to separate logic:
                1. Parallax Translation (Desktop Only)
                2. Scaling (Mobile Adjustment)
            */}
          <div
            style={{ transform: window.innerWidth > 768 ? `translateY(${scrollY * -0.2}px)` : 'none' }}
            className="origin-center"
          >
            <div
              className="w-[300px] md:w-[320px] transition-transform duration-100 ease-out origin-center"
              style={{
                transform: `perspective(1000px) rotateY(${-15 + (scrollY * 0.05)}deg) rotateX(5deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <img src={HeroImage} alt="Hero" className="w-full h-auto drop-shadow-2xl rounded-[40px]" />

              {/* Reflection/Shadow effect similar to PhoneMockup */}
              <div className="absolute -right-4 top-10 w-full h-[90%] bg-black/5 rounded-[40px] -z-10 blur-xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Layer 4: Floating Elements (Fastest) */}
      <FloatingElements scrollY={scrollY} />

    </section>
  );
};