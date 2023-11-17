import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/gallery/IMG-20231026-WA0007.jpg";
import img2 from "../images/gallery/IMG-20231026-WA0008.jpg";
import img3 from "../images/gallery/IMG-20231026-WA0009.jpg";
import img5 from "../images/gallery/IMG-20231026-WA0011.jpg";
import img16 from "../images/gallery/IMG-20231026-WA0022.jpg";
import img17 from "../images/gallery/IMG-20231026-WA0023.jpg";

import OthersHero from "../components/Main/Hero/OthersHero";
import GalleryHero from "../components/Main/Hero/GalleryHero";

const Gallery = () => {
  document.title = "Gallery";

  const images = [img1, img2, img3, img5, img16, img17];
  return (
    <>
      <GalleryHero />
      <div className="gallery-wrapper py-5">
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            {images.map((image, index) => (
              <Col key={index}>
                <img
                  src={image}
                  height={300}
                  alt={`Image ${index + 1}`}
                  className="w-100 object-fit-cover mb-4"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Gallery;
