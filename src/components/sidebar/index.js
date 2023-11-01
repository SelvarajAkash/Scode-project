import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarAchor } from './SidebarElements'
import { Facebook, LinkedIn } from '../../HeroElements';

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink href="#" target='_blank' onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="/services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarAchor href="#" target="_blank" onClick={toggle}>
                        Careers
                    </SidebarAchor>
                    <SidebarLink to="/contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <a href="https://www.facebook.com/scodesoft"><Facebook className="text-white" style={{ fontSize: "25px" }} /></a>
                    <a href="https://www.linkedin.com/company/scode-soft/"><LinkedIn className="text-white" style={{ fontSize: "25px" }} /></a>

                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}