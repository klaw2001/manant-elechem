import React from "react";
import { Container } from "react-bootstrap";
import MyButton from "../../Button/MyButton";

const StorageBanner = () => {
  return (
    <div className="storage-banner py-5">
      <Container>
        <div className="storage-text text-light py-5 d-flex justify-content-center flex-column align-items-center text-center"> 
          <span className="text-uppercase fw-bold text-warning">Cant't Find It ?</span>
          <h2 className="global-hero-heading py-4 fw-bold">We'll Source it</h2>
          <p className="w-lg-50 pb-2">
            Having trouble sourcing a hard-to-find chemical or looking to sell
            excess product? Manant Elechem team is your answer. Our team will
            work on your behalf by sourcing products from our global chemical
            network
          </p>
          <MyButton buttonText='Contact us'/>
        </div>
      </Container>
    </div>
  );
};

export default StorageBanner;
