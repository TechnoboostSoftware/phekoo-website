import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-phekoo-bg selection:bg-phekoo-coral selection:text-white">
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 bg-white shadow-2xl mb-0 md:mb-[650px] transition-all duration-300">
        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer Curtain */}
      <div className="md:fixed md:bottom-0 md:left-0 md:w-full md:h-[650px] md:z-0 bg-phekoo-blue">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
