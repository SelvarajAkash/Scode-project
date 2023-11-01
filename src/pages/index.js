import React from "react";
import HeroSection from "../components/home/HeroSection";
import Experience from "../components/home/ExperienceCounter";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/footer/index"

export const Home = () => {

  return (
    <>
      <HeroSection />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
