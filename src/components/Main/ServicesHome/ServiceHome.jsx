import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serv from "../../../images/home-service.png";
import MyButton from "../../Button/MyButton";
import ServiceHomeCarousel from "./ServiceHomeCarousel";
import './swiperservice.css';

const ServiceHome = () => {
  return (
    <div className="service-home-wrapper py-5" >
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2">
          <Col>
            <div className="about-text">
              <h3 className="mb-3 fw-bold">Why Choose Us?</h3>
              <p className="pb-3"> 
                At Manant Elechem, we understand that selecting the right
                partner for your chemical storage, distribution, and
                manufacturing needs is a critical decision. Here are some
                compelling reasons why we stand out:
              </p>
              <ul className="p-0">
                <li className="">
                  <h4 className="fw-bold mb-2">Expertise and Experience </h4>
                  <span>
                    With years of industry experience, our team brings
                    unparalleled expertise to every project. Our in-depth
                    knowledge of chemical handling and processing ensures that
                    your needs are met with precision and professionalism.
                  </span>
                </li>
                <li>
                  <h4 className="fw-bold mb-2">Comprehensive Solutions </h4>
                  <span>
                    We offer an all-in-one solution for chemical storage,
                    distribution, and small-scale manufacturing. This integrated
                    approach streamlines your operations and saves you time and
                    resources.
                  </span>
                </li>
              </ul>
              <MyButton buttonText='Learn More'/>
            </div>
          </Col>
          <Col className="overflow-hidden">
            {/* <img src={serv} alt="" style={{ marginRight: "-200px" }} /> */}
            <ServiceHomeCarousel/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceHome;
