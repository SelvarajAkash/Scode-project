import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Test1 from "../../images/test1.jpg";
import Test2 from "../../images/test2.jpg";
import Test3 from "../../images/test3.jpg";
import styled from "styled-components";

const TestmonialsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    border-radius : 10px;
    padding : 10px;
    margin-bottom : 15px;
    margin-top : 15px;
    box-shadow: 1px 1px 1px 1px #07dbcd,
                -1px -1px 1px 1px #db07cd;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
const TestimonialContainer = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right,#009245  , #02AABD );
    @media screen and (max-width: 768px) {
        min-height: 650px;
        
    }

    @media screen and (max-width: 480px) {
        min-height: 650px;
    }

`

export default function Testimonials() {

    return (
        <div>
            <TestimonialContainer>
                <TestmonialsH1 >Testimonials</TestmonialsH1>
                <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}



                >
                    <div>
                        <img src={Test1} alt="test1" />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                                It's freeing to be able to catch up on customized news and not be
                                distracted by a social media element on the same site
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={Test2} alt="test2" />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                                The simple and intuitive design makes it easy for me use. I highly
                                recommend Fetch to my peers.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={Test3} alt='test3' />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                                I enjoy catching up with Fetch on my laptop, or on my phone when
                                I'm on the go!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </TestimonialContainer>
        </div>
    );

}



