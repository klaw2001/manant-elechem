import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about-home.png";
import MyButton from "../../Button/MyButton";
const AboutHome = () => {
  return (
    <div className="about-home-wrapper py-5">
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2">
          <Col>
            <img src={about} alt="" className="img-fluid w-100"/>
          </Col>
          <Col>
            <div className="about-text">
              <h3 className="mb-3 fw-bold">What We Do ?</h3>
              <p>
                At Manant Elechem, we specialize in chemical storage solutions
                tailored to meet the diverse needs of our clients. Our
                cutting-edge facilities are designed to accommodate a wide range
                of chemicals, from hazardous materials to temperature-sensitive
                products. 
              </p>
              <h3 className="mb-3 fw-bold">How We Work?</h3>
              <p className="mb-3">
                Safety is our paramount concern. We maintain rigorous safety
                protocols and invest in continuous employee training. Our
                facilities are equipped with the latest safety features, and we
                prioritize compliance with industry regulations.
              </p>
              <MyButton buttonText='Learn More'/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHome;
