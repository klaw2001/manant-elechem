import React from "react";
import HomeHero from "../components/Main/Hero/HomeHero";
import AboutHome from "../components/Main/AboutHome/AboutHome";
import ServiceHome from "../components/Main/ServicesHome/ServiceHome";
import StorageBanner from "../components/Main/Others/StorageBanner";
import Newsletter from "../components/Main/Others/Newsletter";
import TestimonialSwiper from "../components/Main/Others/TestimonialSwiper";
import Footer from "../components/Footer/Footer";

const Home = () => {
  document.title = "Home";
  return (
    <>
      <HomeHero />
      <AboutHome />

      <ServiceHome />
      <TestimonialSwiper />
      <Newsletter />
      <StorageBanner />
    </>
  );
};

export default Home;
