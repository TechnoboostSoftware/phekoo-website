import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Copyright from "./pages/copyRight";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<Copyright />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
