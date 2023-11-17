import React from "react";
import { Container, Row } from "react-bootstrap";
import about1 from "../../../images/about-1.jpg";
import about2 from "../../../images/Picture1.png";
import about3 from "../../../images/about-3.jpg";
const AboutServices = () => {
  const cards = [
    {
      img: about1,
      para: "We specialize in the storage and distribution of a wide range of base oil products, providing a crucial link between manufacturers and end-users. Our state-of-the-art facilities are strategically located to serve diverse industries with precision and care.",
    },
    {
      img: about2,
      para: "Safety is not just a part of our policy; it's ingrained in our culture. We prioritize the safety of our employees, the communities we operate in, and the environment. Our facilities adhere to the highest industry standards and are equipped with advanced safety measures to ensure the integrity of the products we handle",
    },
    {
      img: about3,
      para: "We understand that the quality of base oil products is paramount. That's why we maintain stringent quality control processes throughout the storage and distribution journey. Our experienced team is well-versed in handling base oil, ensuring that the integrity of the products remains intact.",
    },
  ];
  return (
    <div className="about-service-wrapper py-5 mb-5">
      <Container>
        <div className="about-service-text text-center py-4">
          <h2 className="fs-1 w-50 m-auto fw-bold">
            We Provided Best Industry services For You
          </h2>
        </div>
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-lg-row flex-wrap flex-lg-nowrap gap-4 py-3">
          {cards.map((elem, ind) => (
            <div className="about-cards" key={ind}>
              <img src={elem.img} alt="" className="img-fluid" />
              <p className="mt-2">{elem.para}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutServices;
