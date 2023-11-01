import styled from "styled-components";
// import { Link as LinkR } from 'react-router-dom';
import FooterBackground from "../../images/footerBackground.avif";


export const FooterContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 15px;
    background-image: url(${FooterBackground});
    background-size: cover;
    background-repeat: no-repeat; 
    width: 100%;
`

export const FooterWrapper = styled.div`
    max-width: 1200px;


`

export const FooterH2 = styled.h2`
    font-size: 1.3rem;
    color: white;
    font-weight: 500;
    margin-bottom: 30px;  
    
    &:hover {
        color : #4BC5BA;
    }

`

export const FooterLink = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    display: flex;
    transition: all 0.3s;

    
    &:hover {
        color: green;
        text-decoration : none;
    }

`