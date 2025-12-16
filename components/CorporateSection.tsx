import React, { useEffect, useRef, useState } from 'react';

export const CorporateSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile for layout switching
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (window.innerWidth < 768) {
        setScrollProgress(0); // Disable scroll math on mobile
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;

      // We only update parallax progress when within the section's active scroll range
      if (scrolled > -window.innerHeight && scrolled < rect.height) {
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="corporate-events"
      className={`relative w-full bg-white font-sans ${isMobile ? 'h-auto' : 'h-[200vh]'}`}
    >

      {/* 
         The Viewport Wrapper 
         Mobile: Relative stacking. Desktop: Sticky top-0.
      */}
      <div className={`w-full flex flex-col md:flex-row overflow-hidden ${isMobile ? 'relative h-auto' : 'sticky top-0 h-screen'}`}>

        {/* Central Divider (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 z-50 transform -translate-x-1/2"></div>

        {/* === LEFT COLUMN: Know Your Leader === */}
        <div className="w-full md:w-1/2 h-auto md:h-full relative bg-white border-b md:border-b-0 border-r-0 md:border-r border-gray-100 flex flex-col">

          {/* Header */}
          <div className={`${isMobile ? 'relative border-b' : 'absolute top-0 left-0 border-b-0'} w-full z-20 bg-white/95 backdrop-blur-sm p-8 flex flex-col items-center text-center`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-phekoo-blue mb-1">
              KNOW YOUR LEADER
            </h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Team predicts the truth</p>
          </div>

          {/* Content Wrapper */}
          <div
            className="w-full flex flex-col items-center py-16 md:py-0 md:pt-48 space-y-12 md:space-y-16 will-change-transform"
            // Apply parallax only on Desktop
            style={{ transform: !isMobile ? `translateY(-${scrollProgress * 0.4}px)` : 'none' }}
          >
            {/* Leader Profile Card */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-[90%] max-w-[340px] relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-sm">
                <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">David (CEO)</h3>
              <div className="my-4 w-full bg-blue-50 p-4 rounded-xl">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">The Question</p>
                <p className="text-lg font-serif font-bold text-phekoo-blue">"What is my favorite movie?"</p>
              </div>
              <div className="bg-phekoo-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                Answer: The Godfather
              </div>
            </div>

            {/* Connection Line */}
            <div className="h-16 md:h-24 w-0.5 bg-gray-200"></div>

            {/* Employee Guess Card */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100 w-[90%] max-w-[280px] flex items-center space-x-4 relative transform hover:scale-105 transition-transform">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white p-1.5 rounded-full shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-phekoo-blue text-xs">SJ</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">Sarah Jones</p>
                <p className="text-xs text-green-600 font-bold">Guessed Correctly</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 md:pt-10">
              <button className="border-2 border-phekoo-blue text-phekoo-blue px-8 py-3 rounded-full font-bold hover:bg-phekoo-blue hover:text-white transition-colors">
                Setup Leader Game
              </button>
            </div>
          </div>
        </div>


        {/* === RIGHT COLUMN: Corporate Trivia === */}
        <div className="w-full md:w-1/2 h-auto md:h-full relative bg-gray-50 flex flex-col">

          {/* Header */}
          <div className={`${isMobile ? 'relative border-b' : 'absolute top-0 left-0 border-b-0'} w-full z-20 bg-gray-50/95 backdrop-blur-sm p-8 flex flex-col items-center text-center`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-phekoo-blue mb-1">
              CORPORATE TRIVIA
            </h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Team invents the lies</p>
          </div>

          {/* Content Wrapper */}
          <div
            className="w-full flex flex-col items-center py-16 md:py-0 md:pt-[60vh] space-y-8 will-change-transform"
            style={{ transform: !isMobile ? `translateY(-${scrollProgress * 1.2}px)` : 'none' }}
          >
            {/* Question Bubble */}
            <div className="bg-phekoo-blue text-white p-6 rounded-2xl rounded-br-none shadow-xl max-w-[80%] md:max-w-sm self-center md:self-end md:mr-8 transform rotate-1">
              <p className="text-xs opacity-70 uppercase font-bold mb-2">Round 3</p>
              <p className="font-medium text-xl leading-snug">"Who founded the company?"</p>
            </div>

            {/* Fake Answer 1 */}
            <div className="bg-white p-5 rounded-xl rounded-bl-none shadow-md border border-gray-200 max-w-[80%] self-center md:self-start md:ml-12 transform -rotate-2 hover:rotate-0 transition-transform">
              <p className="text-gray-700 font-medium text-lg">"Elon Musk's cousin."</p>
              <div className="text-[10px] text-gray-400 mt-2 text-right">- Engineering Team</div>
            </div>

            {/* Fake Answer 2 (The Bluff) */}
            <div className="bg-white p-6 rounded-xl rounded-bl-none shadow-xl border-2 border-phekoo-coral max-w-[80%] self-center transform rotate-3 scale-110 z-10">
              <p className="text-gray-900 font-bold text-xl">"A sentient AI named Bob."</p>
              <div className="flex justify-between items-center mt-3 border-t border-gray-100 pt-2">
                <span className="text-[10px] text-phekoo-coral font-bold uppercase tracking-wider">Bluff Detected</span>
                <span className="text-xs text-gray-400">5 votes</span>
              </div>
            </div>

            {/* Fake Answer 3 */}
            <div className="bg-white p-4 rounded-xl rounded-bl-none shadow-sm border border-gray-200 max-w-[80%] self-center md:self-start md:ml-20 transform rotate-1 opacity-60 blur-[1px]">
              <p className="text-gray-500">"Three kids in a trench coat."</p>
            </div>

            {/* CTA Button */}
            <div className="pt-10 md:pt-20">
              <button className="bg-phekoo-coral text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Setup Trivia Game
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};