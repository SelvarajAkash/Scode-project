import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,

} from "../../HeroElements";
import Video from "../../videos/homeBackground.mp4";
import "../../App.css";



const HeroSection = () => {

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <h1 className="h1-hero ">Scode Software Solutions</h1>
          <p className="hero-text">
            Our motto is “Different Imaginations Empower Revolution and Revolution for Innovators”. We create and execute our projects that “TREAD NEW PATHS”. SCODE SOFTWARE SOLUTION aims to the destiny of efficient and responsible to serve the industry and society.
          </p>
        </HeroContent>
      </HeroContainer>
  
    </>



  );
};

export default HeroSection;
