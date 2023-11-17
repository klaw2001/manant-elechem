import React from "react";
import { Col, Container, Row, ProgressBar} from "react-bootstrap";
import about from "../../../images/about-choose.jpg";
const AboutChoose = () => {
  const now = 90;
  const now2 = 80;
  const now3 = 70;
  return (
    <div className="about-choose-wrapper py-5">
      <Container>
        <Row className="align-items-center text-light row-cols-1 row-cols-md-2">
          <Col>
            <img src={about} alt="" className="img-fluid" style={{marginTop:'-100px'}}/>
          </Col>
          <Col>
            <h2 className="fw-bold">Our Company Has 35 year experience in industry</h2>
            <p className="my-3">
              We have a long and proud history givin emphasis to environment
              social and economic outcomes to deliver places that respond.
            </p>
            <div className="progress-box mt-5">
              <ProgressBar now={now} variant="warning" label={`${now}%`} className="mb-4" />
              <ProgressBar now={now2} variant="warning" label={`${now2}%`} className="mb-4" />
              <ProgressBar now={now3} variant="warning" label={`${now3}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutChoose;
