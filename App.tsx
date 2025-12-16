import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArtOfTheBluff } from './components/ArtOfTheBluff';
import { CorporateSection } from './components/CorporateSection';
import { ContactUs } from './components/ContactUs';

import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-phekoo-bg selection:bg-phekoo-coral selection:text-white">
      <Navbar />

      {/* 
         Main Content Wrapper 
         z-10 ensures it sits on top of the fixed footer.
         mb-[600px] (on desktop) allows the user to scroll past the content 
         to reveal the footer fixed underneath.
      */}
      <div className="relative z-10 bg-white shadow-2xl mb-0 md:mb-[650px] transition-all duration-300">
        <main>
          <Hero />
          <ArtOfTheBluff />
          <CorporateSection />
          <ContactUs />

        </main>
      </div>

      {/* 
         The Footer (Curtain Reveal Effect)
         Fixed at the bottom with z-0. 
         On mobile, it acts as a normal static block (due to mb-0 above and static positioning here on mobile).
         On desktop, it is hidden by the main content until the user scrolls to the bottom.
      */}
      <div className="md:fixed md:bottom-0 md:left-0 md:w-full md:h-[650px] md:z-0 bg-phekoo-blue">
        <Footer />
      </div>

    </div>
  );
};

export default App;