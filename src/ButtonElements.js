import styled from "styled-components";
import { Link as LinkS } from "react-scroll";


export const Button = styled(LinkS)`
    background : #000;
    border-radius: 30px;
    outline: none;
    border: none;
    padding : 8px 6px 8px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;
    margin-right : 15px;
    color : yellow;
    border : 3px solid yellow;

    &:hover {
        color : #fff;
        box-shadow: -0px 5px 10px 2px yellow,
        -0px -5px 10px 2px yellow;
    }


`

export const ButtonR = styled.a`
    background : #000;
    border-radius: 30px;
    outline: none;
    border: none;
    padding : 8px 6px 8px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;
    margin-right : 15px;
    color : yellow;
    border : 2px solid #fff;





    &:hover {
        color : #fff;
        box-shadow: -0px 5px 10px 2px rgba(39, 245, 63, 0.8),
        -0px -5px 10px 2px rgba(39, 245, 63, 0.8);
    
    
        
    
    }

`

export const ButtonBasic = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : '#B05FFD')};
        color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    }

`

export const ButtonBasicInv = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: #000;
        color: #fff;
    }

`