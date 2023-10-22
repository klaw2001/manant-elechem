import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import test from "../../../images/test.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";

export default function TestimonialSwiper() {
  const cards = [
    {
      img: test,
      title: "Hanna Lisem",
      job: "Project Manager",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihimpedit quo minus id quod maxime placeat ",
    },
    {
      img: test,
      title: "Hanna Lisem",
      job: "Project Manager",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihimpedit quo minus id quod maxime placeat ",
    },
    {
      img: test,
      title: "Hanna Lisem",
      job: "Project Manager",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihimpedit quo minus id quod maxime placeat ",
    },
    {
      img: test,
      title: "Hanna Lisem",
      job: "Project Manager",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihimpedit quo minus id quod maxime placeat ",
    },
    {
      img: test,
      title: "Hanna Lisem",
      job: "Project Manager",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihimpedit quo minus id quod maxime placeat ",
    },
  ];
  const breakpoints = {
    // Define responsive breakpoints here
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="testimonial-carousel py-5">
      <Container>
        <Swiper
         slidesPerView={3}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         loop={true}
         breakpoints={breakpoints}
         className="my-Swiper"
        >
          {cards.map((elem, ind) => (
            <SwiperSlide className="p-0 swiper-slide-test" key={ind}>
              <div className="slide-test text-center text-dark p-3 border border-1 rounded">
                <img src={elem.img} alt="testimonial" className="m-auto rounded-circle pb-2" />
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
