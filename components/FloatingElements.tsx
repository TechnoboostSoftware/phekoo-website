import React from 'react';

interface FloatingElementsProps {
  scrollY: number;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ scrollY }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Element 1: Bottom Left - Fast */}
      <div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-phekoo-blue rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm opacity-80 z-20"
        style={{ transform: `translateY(-${scrollY * 0.4}px)` }}
      >
        <span className="text-4xl text-white font-serif">?</span>
      </div>

      {/* Element 2: Top Right - Fast */}
      <div 
        className="absolute top-32 right-[10%] w-16 h-16 bg-phekoo-coral rounded-full flex items-center justify-center shadow-lg blur-[2px] opacity-60 z-20"
         style={{ transform: `translateY(-${scrollY * 0.6}px)` }}
      >
      </div>

       {/* Element 3: Middle - Chat Bubble */}
       <div 
        className="absolute top-[60%] left-[45%] bg-white px-6 py-4 rounded-2xl rounded-bl-none shadow-lg border border-gray-100 z-10 hidden lg:block"
        style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
       >
         <p className="text-phekoo-blue font-bold font-serif italic text-lg">"Liar!"</p>
      </div>
    </div>
  );
};