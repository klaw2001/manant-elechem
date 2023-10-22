import React from "react";
import { Container } from "react-bootstrap";

const OthersHero = ({ otherheading }) => {
  return (
    <>
      <div className="other-hero-wrapper h-75">
        <Container>
          <div className="other-box d-flex flex-column justify-content-center align-items-center mt-5 h-75">
            <h2 className="text-light global-hero-heading">{otherheading}</h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OthersHero;
