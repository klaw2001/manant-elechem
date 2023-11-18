import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  document.title = "Contact"

  return (
    <div className="contact-wrapper py-5">
      <Container>
        <Row className="row-cols-1 row-cols-md-2 align-items-center py-5">
          <Col data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d118129.70528972762!2d73.11745737241426!3d22.294905300987306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d22.2971289!2d73.2008848!4m3!3m2!1d22.2949763!2d73.19986039999999!5e0!3m2!1sen!2sin!4v1697805929187!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-100"
            ></iframe>
          </Col>
          <Col data-aos="fade-left">
            <div>
              <div class="contact-form-wrapper d-flex">
                <form action="https://formsubmit.co/manant@manantelechem.com" method="POST" class="contact-form text-start">
                  <p class="description">
                    Feel free to contact us if you need any assistance, any help
                    or another question.
                  </p>
                  <div>
                    <input
                      type="text"
                      class="form-control rounded border-white mb-3 form-input"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      class="form-control rounded border-white mb-3 form-input"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      class="form-control rounded border-white mb-3 form-text-area"
                      rows="5"
                      cols="30"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="submit-button-wrapper">
                    <input type="submit" value="Send" className="global-button-one" />
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
