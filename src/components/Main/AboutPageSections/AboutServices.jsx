import React from "react";
import { Container, Row } from "react-bootstrap";
import about1 from "../../../images/about-1.jpg";
import about2 from "../../../images/about-2.jpg";
import about3 from "../../../images/about-3.jpg";
const AboutServices = () => {
  const cards = [
    {
      img: about1,
      para: "Industrial Timetable Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: about2,
      para: "Industrial Timetable Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: about3,
      para: "Industrial Timetable Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
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
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-lg-row flex-wrap flex-lg-nowrap gap-4 py-3" >
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
