import React from "react";
import { Hero } from "../components/Hero";
import { ArtOfTheBluff } from "../components/ArtOfTheBluff";
import { CorporateSection } from "../components/CorporateSection";
import { ContactUs } from "../components/ContactUs";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ArtOfTheBluff />
      <CorporateSection />
      <ContactUs />
    </>
  );
};

export default Home;
