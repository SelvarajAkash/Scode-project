import React from 'react'
import CountUp from 'react-countup';
import { BiPlus } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri"
import Tilt from "react-parallax-tilt";



const ExperienceCounter = () => {
  return (
    <>
      <section id="counter" className="sec-padding">
        <div className="container" id="testimonials">
          <div className="row">

            <div className="col-md-3 mb-3">
              <Tilt>
                <div className="count">
                  <p className='number'>
                    <CountUp start={0}
                      end={40}
                      duration={3}
                    /><span><BiPlus /></span>
                  </p>
                  <h4>Happy Clients</h4>
                </div>
              </Tilt>
            </div>


            <div className="col-md-3 mb-3">
              <Tilt>
                <div className="count">
                  <p className='number'> <CountUp start={0}
                    end={40}
                    duration={3}
                  /><span><BiPlus /></span></p>
                  <h4>Awards Winning</h4>
                </div>
              </Tilt>

            </div>

            <div className="col-md-3 mb-3">
              <Tilt>
                <div className="count">
                  <p className='number'> <CountUp start={0}
                    end={40}
                    duration={3}
                  /><span><BiPlus /></span></p>
                  <h4>Projects Complete</h4>
                </div>
              </Tilt>

            </div>
            <div className="col-md-3 mb-3 ">
              <Tilt>
              <div className="count">
                <p className='number' >
                  <span><Ri24HoursLine /></span></p>
                <h4>24/7 Support</h4>
              </div>
              </Tilt>
          
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default ExperienceCounter;