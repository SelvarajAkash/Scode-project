import React, { useEffect, useState } from "react";
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";
import '../../App.css';
import Tilt from "react-parallax-tilt";
import axios from "axios";

const URL = "http://192.168.0.108:8001/scode/ScodeDetail"


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setServices(response.data.ScodeDetail);
    });
  }, []);

  return (
    <>
      <ServicesContainer id="services">
        <ServicesWrapper>
          {
            services.length > 0 ? (
              services.map((Service, i) => (
                <Tilt key={i}>
                  <ServicesCard>
                    <ServicesIcon src={`http://192.168.0.108:8001${Service?.image}`} alt={Service.heading} />
                    <ServicesH2>{Service?.heading}</ServicesH2>
                    <ServicesP>
                      {Service?.para}
                    </ServicesP>
                  </ServicesCard>
                </Tilt>
              )))
              : (
                <h1 className="text-center text-success">Loading...</h1>
              )}

        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
