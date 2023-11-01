import React from "react";
import {
  HeroContainer,
  HeroContent,
} from "../../HeroElements";
import "../../App.css";

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroContent>
        <h1 className="h1-hero">About Us .
        </h1>
        <p className="hero-text">Scode Software Solutions is a software development team located in Cuddalore. Expect top quality work with awesome support. We are committed to supply robust, cost effective and future services, enabling our customers to urge high returns on their IT investments including corporate governance designed for greater agility and market focus during this globally competitive environment.</p>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
