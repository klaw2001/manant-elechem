import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiperservice.css";
import ser1 from "../../../images/ser-1new.webp";
import ser2 from "../../../images/ser-2.jpg";
import ser3 from "../../../images/ser-3.jpg";
import ser4 from "../../../images/ser-4.jpeg";
import ser5 from "../../../images/ser-5.webp";
import ser6 from "../../../images/ser-6.jpeg";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
const ServiceHomeCarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper service-swiper"
      >
        <SwiperSlide className="p-0">
          <img src={ser1} height={300} className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className="p-0">
          <img src={ser2} height={300} />
        </SwiperSlide>
        <SwiperSlide className="p-0">
          <img src={ser3} height={300} />
        </SwiperSlide>
        <SwiperSlide className="p-0">
          <img src={ser4} height={300} />
        </SwiperSlide>
        <SwiperSlide className="p-0">
          <img src={ser5} height={300} />
        </SwiperSlide>
        <SwiperSlide className="p-0">
          <img src={ser6} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServiceHomeCarousel;
