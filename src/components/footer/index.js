import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import {
  HeroBtnWrapper,
  Facebook,
  LinkedIn,
} from "../../HeroElements";
import { ButtonR } from "../../ButtonElements";
import "../../App.css";

const Footer = () => {

  console.log(window.location.pathname);

  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-4 col-sm-12 col-md-4">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">How it works</FooterLink>
            {/* {window.location.pathname === '/' ? <FooterLink href="#testimonials">Testimonials</FooterLink> :  <FooterLink href="/testimonials">Testimonials</FooterLink>} */}
            {window.location.pathname === '/' && <FooterLink href="#testimonials">Testimonials</FooterLink>}
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Destinations</FooterLink>
            <FooterLink href="#">Our Locations</FooterLink>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-4 ">
            <FooterH2>Follow Us</FooterH2>
            <HeroBtnWrapper>

              <ButtonR href="https://www.facebook.com/scodesoft" target="_blank" >
                <Facebook />
              </ButtonR>

              <ButtonR href="https://www.linkedin.com/company/scode-soft/" target="_blank" >
                <LinkedIn />
              </ButtonR>
            </HeroBtnWrapper>

          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text-copy gray-text center-align">- Copyright © 2023 All rights reserved | Scode Software Solutions -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
