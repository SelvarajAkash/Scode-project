import styled, { keyframes } from "styled-components";

export const ServicesContainer = styled.div`
    min-height: 800px;
    background: #02072b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;


    @media screen and (max-width: 768px) {
        min-height: 1100px;
      
    }

    @media screen and (max-width: 480px) {
        min-height: 1200px;
    }

`

export const ServicesWrapper = styled.div` 
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 24px;
    padding: 20px 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr ;
        //padding: 0 20px;
        padding: 20px 50px;
      
    }

`



const boxShadowColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#008000', '#800080', '#FFA500', '#808080'];


const boxShadowAnimation = keyframes`
  ${boxShadowColors.map((color, index) => {
    const nextColor = boxShadowColors[(index + 1) % boxShadowColors.length];
    return `
      ${index * (100 / boxShadowColors.length)}% {
        box-shadow: 0 0 5px 5px ${color};
      }
      ${((index + 1) % boxShadowColors.length) * (100 / boxShadowColors.length)}% {
        box-shadow: 0 0 5px 5px ${nextColor};
      }
    `;
  })}
`;

export const ServicesCard = styled.div`
  background: linear-gradient(to right, #DD2476, #FF512F);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  animation: ${boxShadowAnimation} 5s linear infinite;
  height: 350px;
  padding: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;







export const ServicesIcon = styled.img`
    height: 90px;
    width: 90px;
    margin-bottom: 40px;

    &:hover {
        transform: scale(1.05);
    }
    
`

export const ServicesH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 50px;
    border-radius : 10px;
    padding : 10px;
    overflow : hidden;
    box-shadow: 1px 1px 1px 1px #07dbcd,
                -1px -1px 1px 1px #db07cd;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: 900;
    color: #85C54B;
    
`

export const ServicesP = styled.p`
    font-size: 13px;
    text-align: center;
    color : #fff;
    padding-bottom : 25px;

    @media screen and (max-width: 480px) {
      font-size: 12px;
  }

`
