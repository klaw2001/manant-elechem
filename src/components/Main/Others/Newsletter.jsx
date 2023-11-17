import React from "react";
import { Container } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="news-wrapper py-5">
      <Container>
        <div className="news-text d-flex justify-content-center align-items-center text-light flex-column">
          <h1 className="mb-3 text-dark">Subscribe To Newsletter</h1>
          <form
            action=""
            className="rounded-pill position-relative w-100 text-center"
           
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control rounded-pill p-3 w-50 m-auto"
            />
            <button
              type="submit"
              className="text-primary fs-4 position-absolute"
              style={{ right: "27%", bottom: "13px" }}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
