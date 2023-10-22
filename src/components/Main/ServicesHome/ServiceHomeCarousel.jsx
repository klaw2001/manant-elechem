import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiperservice.css';

// import required modules
import { Autoplay , EffectCoverflow, Pagination } from 'swiper/modules';
const ServiceHomeCarousel = () => {
  return (
     <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      autoplay={{
        delay:2500,
        disableOnInteraction:false
      }}
      pagination={true}
      modules={[Autoplay , EffectCoverflow, Pagination]}
      className="mySwiper service-swiper"
    >
      <SwiperSlide className='p-0' >
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='img-fluid'/>
      </SwiperSlide>
      <SwiperSlide className='p-0' >
        <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide className='p-0'>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default ServiceHomeCarousel