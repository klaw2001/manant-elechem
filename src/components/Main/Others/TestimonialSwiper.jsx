import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import test from "../../../images/test copy.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-fade"; // Import the fade effect for better transition

import "./testimonial.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

export default function TestimonialSwiper() {
  const cards = [
    {
      img: test,
      title: "Savita Polymers Ltd.",
      job: "Testimonial from Savita Polymers Ltd.",
      review:
        "Savita Polymers Ltd. has been a valuable partner for our raw material needs. Their commitment to quality and timely deliveries has greatly contributed to the success of our projects. We look forward to continuing our collaboration.",
    },
    {
      img: test,
      title: "Savita Oil Technologies",
      job: "Testimonial from Savita Oil Technologies",
      review:
        "Savita Oil Technologies has consistently provided us with high-quality oils, meeting our specifications. Their responsive team and dedication to customer satisfaction make them a preferred choice for our lubricant requirements.",
    },
    {
      img: test,
      title: "Raj Petro Specialities Pvt. Ltd.",
      job: "Testimonial from Raj Petro Specialities Pvt. Ltd.",
      review:
        "Raj Petro Specialities Pvt. Ltd. has been a trusted supplier of specialty oils for our industrial applications. Their products have consistently met our stringent quality standards, and their team's support is highly appreciated.",
    },
    {
      img: test,
      title: "Gandhar Oil Refinery",
      job: "Testimonial from Gandhar Oil Refinery",
      review:
        "Gandhar Oil Refinery has been our go-to source for high-quality petroleum products. Their reliability and commitment to customer satisfaction make them a valuable partner in our supply chain.",
    },
    {
      img: test,
      title: "Huber Group (I) Pvt. Ltd.",
      job: "Testimonial from Huber Group (I) Pvt. Ltd.",
      review:
        "Huber Group (I) Pvt. Ltd. has consistently delivered top-notch printing inks that meet our specifications. Their dedication to quality and innovation aligns with our expectations, making them a preferred supplier.",
    },
    {
      img: test,
      title: "Rajkamal Industries Pvt Ltd",
      job: "Testimonial from Rajkamal Industries Pvt Ltd",
      review:
        "Rajkamal Industries Pvt Ltd has been a reliable partner in providing us with essential raw materials. Their commitment to quality and prompt deliveries has been crucial to our manufacturing processes.",
    },
    {
      img: test,
      title: "Organic Coatings Limited",
      job: "Testimonial from Organic Coatings Limited",
      review:
        "Organic Coatings Limited has been instrumental in ensuring the quality of our coatings. Their products have consistently met our specifications, and their team's responsiveness is commendable.",
    },
    {
      img: test,
      title: "Ipsa Texchem Pvt Ltd",
      job: "Testimonial from Ipsa Texchem Pvt Ltd",
      review:
        "Ipsa Texchem Pvt Ltd has been a valuable partner in providing us with textile chemicals. Their commitment to quality and customer satisfaction has made them a preferred supplier for our business.",
    },
    {
      img: test,
      title: "Mehta Petro Refineries Ltd",
      job: "Testimonial from Mehta Petro Refineries Ltd",
      review:
        "Mehta Petro Refineries Ltd has been a trusted supplier of petroleum products for our industry. Their consistent quality and timely deliveries have contributed to the smooth operation of our processes.",
    },
    {
      img: test,
      title: "Quebec Petroleum Resources Ltd",
      job: "Testimonial from Quebec Petroleum Resources Ltd",
      review:
        "Quebec Petroleum Resources Ltd has consistently provided us with reliable petroleum resources. Their commitment to sustainability and ethical practices aligns with our values, making them a preferred partner.",
    },
    {
      img: test,
      title: "Brahmani Oil Corporation",
      job: "Testimonial from Brahmani Oil Corporation",
      review:
        "Brahmani Oil Corporation has been a reliable source for high-quality oils. Their dedication to customer satisfaction and consistent product quality make them a trusted partner in our industry.",
    },
    {
      img: test,
      title: "Panasonic Energy Ltd",
      job: "Testimonial from Panasonic Energy Ltd",
      review:
        "Panasonic Energy Ltd has been a key player in our supply chain for batteries. Their commitment to innovation and quality aligns with our brand values, and we appreciate their contributions to our success.",
    },
    {
      img: test,
      title: "DIC India Ltd",
      job: "Testimonial from DIC India Ltd",
      review:
        "DIC India Ltd has been a reliable supplier of printing inks for our business. Their consistent quality and on-time deliveries have contributed to the success of our projects. We value our partnership with DIC India Ltd.",
    },
    {
      img: test,
      title: "Royal Petrochem Ltd",
      job: "Testimonial from Royal Petrochem Ltd",
      review:
        "Royal Petrochem Ltd has been a valuable partner in providing us with high-quality petrochemical products. Their commitment to sustainability and excellence aligns with our business values, and we look forward to continued collaboration.",
    },
    {
      img: test,
      title: "Amit Petrolubes",
      job: "Testimonial from Amit Petrolubes",
      review:
        "Amit Petrolubes has consistently delivered high-quality lubricants that meet our industry's specifications. Their responsive team and commitment to customer satisfaction make them a trusted supplier for our business.",
    },
    {
      img: test,
      title: "Sterlite Lubricants Pvt Ltd.",
      job: "Testimonial from Sterlite Lubricants Pvt Ltd.",
      review:
        "Sterlite Lubricants Pvt Ltd. has been a reliable supplier of lubricants for our machinery. Their consistent quality and technical support have been instrumental in the smooth operation of our equipment.",
    },
  ];

  const breakpoints = {
    // Define responsive breakpoints here
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  };

  return (
    <div className="testimonial-carousel py-5" data-aos="fade-up">
      <p className="text-center text-uppercase text-light">Testimonials</p>
      <h2 className="text-center text-light">What Clients Say</h2>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          // breakpoints={breakpoints}
          // effect="fade" // Use fade effect for smooth transitions
          modules={[Pagination, Navigation]}
          className="my-Swiper bg-transparent"
        >
          {cards.map((elem, ind) => (
            <SwiperSlide
              className="p-0 swiper-slide-test bg-transparent"
              key={ind}
            >
              <div
                className="slide-test text-center text-light p-3 rounded"
                style={{ width: "65%", margin: "auto" }}
              >
                <img
                  src={test}
                  alt="testimonial"
                  className="m-auto rounded-circle pb-2"
                />
                <h3 className="fs-4 ">{elem.title}</h3>
                <h4 className="fs-4 my-2">{elem.job}</h4>
                <p className="fs-6">{elem.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
