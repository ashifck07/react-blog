import React from "react";
import "./HeroSection.css";
import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className="d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center heroContent">
        <h4 className="m-0">ADVENTURE</h4>
        <h2 className="fs-1">
          Richird Norton photorealistic rendering as real photos
        </h2>
        <p className="m-0">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
      </div>
    </Container>
  );
};

export default HeroSection;
