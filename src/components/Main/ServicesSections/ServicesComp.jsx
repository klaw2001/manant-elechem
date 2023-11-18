import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import ser1 from "../../../images/ser-1.webp";
import ser6 from "../../../images/ser-6.jpeg";
import table1 from "../../../images/heavy-table.jpg";
import table2 from "../../../images/wax-table.jpg";
import table3 from "../../../images/table3.png";
import MyButton from "../../Button/MyButton";
import { useNavigate } from "react-router-dom";

const ServicesComp = () => {
  const navigate = useNavigate();

  const services = [
    {
      img: ser1,
      img2: table1,
      title: "Heavy Oil Specification",
      para: "Napthenic oils are a type of mineral oil characterized by a high content of naphthenic hydrocarbons. They are often used as lubricants and in various industrial applications. Napthenic oils are known for their excellent thermal stability and resistance to oxidation, making them suitable for use in the production of greases, metalworking fluids, and other lubrication products.",
    },
    {
      img: ser6,
      img2: table2,
      title: "Paraffin Waxes",
      para: "Paraffin waxes are a type of mineral wax derived from petroleum. They are known for their low cost and versatility. Paraffin waxes have a wide range of uses, including as candle wax, in the cosmetics and pharmaceutical industries, and as a component in various industrial applications. They can provide moisture resistance, heat insulation, and a smooth finish in different products.",
    },
    {
      img: ser6,
      img2: table3,
      title: "Light Napthenic Oils",
      para: "Light naphthenic oils are a type of hydrocarbon-based fluid that falls within the category of naphthenic oils. These oils are characterized by their composition, which includes a significant proportion of naphthenic hydrocarbons. Naphthenic hydrocarbons are saturated cyclic compounds, and they are known for their relatively high solvency and good thermal stability.",
    },
  ];

  return (
    <div className="services-wrapper py-5">
      <Container>
        <Row className="row-cols-1 row-cols-md-1 row-cols-lg-1">
          {services.map((elem, ind) => (
            <Col key={ind} data-aos="fade-up">
              <Card className="border-0">
                <div className="d-flex flex-lg-row flex-column">
                  <Card.Img
                    variant="top"
                    src={elem.img}
                    height={250}
                    className="img-fluid"
                  />
                  <Card.Img
                    variant="top"
                    src={elem.img2}
                    height={250}
                    className="img-fluid"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{elem.title}</Card.Title>
                  <Card.Text className="">{elem.para}</Card.Text>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/contact")}
                  >
                    Get Quote
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="storage-and-equipments my-3">
          <h2>Storage and Equipments</h2>
          <ListGroup className="py-4">
            <ListGroup.Item>
              <strong>Storage Tanks:</strong> We have 3 storage tanks with 60KL,
              50KL, and 30KL capacity. We have proposed 2 storage tanks of 80KL
              capacity, foundation ready.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Warehouse:</strong> We have a warehouse of 2000 sq ft for
              storage.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Weighing Equipments:</strong> We have a 300Kg drum weigh
              scale and ordered a 50MT weigh bridge.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default ServicesComp;
