import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavAchor,
} from "./NavbarElements";
import "../../App.css";
import ScodeLogo from '../../images/ScodeLogo.png';
import { ButtonR } from "../../ButtonElements";
import { Facebook, LinkedIn } from "../../HeroElements";


export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={ScodeLogo} alt="Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavAchor href="#" target="_blank">Careers</NavAchor>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ButtonR href="https://www.facebook.com/scodesoft" target="_blank" >
              <Facebook />
            </ButtonR>

            <ButtonR href="https://www.linkedin.com/company/scode-soft/" target="_blank" >
              <LinkedIn />
            </ButtonR>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
