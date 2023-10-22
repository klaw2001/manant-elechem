import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Swipercss/swiper.css";
import banner from '../../../images/banner.png'

import { Autoplay , Parallax, Pagination, Navigation } from "swiper/modules";
import MyButton from "../../Button/MyButton";
const HomeHero = () => {
  const slides = [
    {
      title: "Chemical Storage",
      description: "We specialize in safe and secure chemical storage solutions.",
      buttonText: "Learn More",
    },
    {
      title: "Chemical Distribution",
      description: "Efficiently delivering chemicals to your doorstep.",
      buttonText: "Explore Services",
    },
    {
      title: "Small-Scale Manufacturing",
      description: "We excel in small-scale chemical manufacturing with precision.",
      buttonText: "Discover Products",
    },
  ];
  return (
    <div className="hero-section home-hero">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
        navigation={true}
        modules={[Autoplay , Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content text-center text-lg-start">
            <h2 className="global-hero-heading">{slide.title}</h2>
            <p className="fw-light mb-3">{slide.description}</p>
            <MyButton buttonText={slide.buttonText}/>
          </div>
        </SwiperSlide>
      ))}
       
      </Swiper>
    </div>
  );
};

export default HomeHero;
