import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about-home.png";
import MyButton from "../../Button/MyButton";
import { Link } from "react-router-dom";
const AboutHome = () => {
  return (
    <div className="about-home-wrapper py-5">
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2">
          <Col data-aos="fade-right">
            <img src={about} alt="" className="img-fluid w-100" />
          </Col>
          <Col data-aos="fade-left">
            <div className="about-text">
              <h3 className="mb-3 fw-bold">What We Do ?</h3>
              <p>
                At Manant Elechem Corporation, we specialize in Naphthenic Base
                Oil storage solutions tailored to meet the diverse needs of our
                clients. Our cutting-edge facilities are designed to accommodate
                a wide range of Naphthenic Base Oils.
              </p>
              <h3 className="mb-3 fw-bold">How We Work?</h3>
              <p className="mb-3">
                Our facilities are equipped with the latest safety features, and
                we prioritize compliance with industry regulations.
              </p>
              <Link to="/about">
                <MyButton buttonText="Learn More" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHome;
