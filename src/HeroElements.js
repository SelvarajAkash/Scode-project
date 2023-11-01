import styled from "styled-components";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    //height: 800px;
    min-height: 100vh;
    position: relative;
    z-index: 1;

   

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:  0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.5;

`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.5;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroBtnWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align : center;

`


export const Facebook = styled(BiLogoFacebook)`
    margin-left: 8px;
    font-size: 20px;

`
export const LinkedIn = styled(BiLogoLinkedin)`
    margin-left : 8px;
    font-size : 20px;

`
