import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ser1 from "../../../images/ser-1.webp";
import ser2 from "../../../images/ser-2.jpg";
import ser3 from "../../../images/ser-3.jpg";
import ser4 from "../../../images/ser-4.jpeg";
import ser5 from "../../../images/ser-5.webp";
import ser6 from "../../../images/ser-6.jpeg";
import MyButton from "../../Button/MyButton";
const ServicesComp = () => {
  const services = [
    {
      img: ser1,
      title: "Napthenic Oils",
      para: "Napthenic oils are a type of mineral oil characterized by a high content of naphthenic hydrocarbons. They are often used as lubricants and in various industrial applications. Napthenic oils are known for their excellent thermal stability and resistance to oxidation, making them suitable for use in the production of greases, metalworking fluids, and other lubrication products.",
    },
    {
      img: ser2,
      title: "Petrolatum",
      para: "Petrolatum, also known as petroleum jelly, is a semi-solid mixture derived from petroleum. It is used primarily for its skin-friendly properties. Petrolatum acts as an occlusive barrier, locking in moisture and protecting the skin from external irritants. It is commonly found in skincare products, ointments, and as a remedy for dry and chapped skin.",
    },
    {
      img: ser3,
      title: "Ink Oils & Solvents",
      para: "Ink oils and solvents are substances used in the printing and ink manufacturing industry. Ink oils are typically used as carriers for pigments and dyes, helping to achieve the desired consistency and color. Solvents are used to dissolve and disperse ink components. They play a crucial role in the formulation of various inks, including those used in printing and packaging.",
    },
    {
      img: ser4,
      title: "Micro Waxes",
      para: "Micro waxes, also known as synthetic waxes, are a group of waxes with specific properties. These waxes are typically characterized by their small particle size and controlled crystalline structure. They find application in various industries, including coatings, adhesives, and plastics, where they improve texture, provide gloss, and enhance properties like scratch resistance.",
    },
    {
      img: ser5,
      title: "Polyethylene (PE) Waxes",
      para: "Polyethylene waxes, often abbreviated as PE waxes, are synthetic waxes made from polyethylene polymers. They are commonly used as additives in a wide range of applications, including plastics, rubber, and coatings. PE waxes offer benefits such as improved processing, lubrication, and surface properties.",
    },
    {
      img: ser6,
      title: "Paraffin Waxes",
      para: "Paraffin waxes are a type of mineral wax derived from petroleum. They are known for their low cost and versatility. Paraffin waxes have a wide range of uses, including as candle wax, in the cosmetics and pharmaceutical industries, and as a component in various industrial applications. They can provide moisture resistance, heat insulation, and a smooth finish in different products.",
    },
  ];

  return (
    <div className="services-wrapper py-5">
      <Container>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
          {services.map((elem, ind) => (
            <Col key={ind}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src={elem.img}
                  height={250}
                  className="object-fit-cover"
                />
                <Card.Body>
                  <Card.Title>{elem.title}</Card.Title>
                  <Card.Text className="text-truncate my-card-text">{elem.para}</Card.Text>
                  <MyButton buttonText='Get Quote'/>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;
