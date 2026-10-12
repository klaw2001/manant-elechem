import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import banner from "../images/banner.png";
import aboutHome from "../images/about-home.png";
import homeBanner from "../images/home-banner.png";
import testimonialBg from "../images/testimonial-bg.jpg";
import {
  heroPillars,
  homeFilmstrip,
  testimonials,
  testimonialAvatarImage,
  stats,
} from "../data/site";
import ButtonLink from "../components/common/ButtonLink";
import Reveal from "../components/common/Reveal";
import StatsBand from "../components/common/StatsBand";
import usePageTitle from "../hooks/usePageTitle";
import "./Home.css";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const active = heroPillars[index];

  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % heroPillars.length),
      7000
    );
    return () => clearTimeout(t);
  }, [index]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__img" src={banner} alt="" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__scale" aria-hidden="true" />

      <div className="container-x hero__inner">
        <p className="eyebrow eyebrow--light">
          Base oil storage · distribution · manufacturing
        </p>
        <h1 id="hero-title" className="display hero__title">
          Base oil, stored and moved with <span className="hero__accent">precision.</span>
        </h1>

        <div className="hero__panel" key={index} aria-live="polite">
          <h2 className="hero__pillar">{active.title}</h2>
          <p className="lead lead--light">{active.description}</p>
          <div className="hero__actions">
            <ButtonLink to={active.path} variant="light">
              {active.cta}
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost" icon={false}>
              Get a quote
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="container-x hero__tabs-wrap">
        <ol className="hero__tabs">
          {heroPillars.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                className={`hero__tab ${i === index ? "is-active" : ""}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                <span className="hero__tab-no">0{i + 1}</span>
                <span className="hero__tab-name">{p.title}</span>
                <span className="hero__tab-track">
                  {i === index && <span key={index} className="hero__tab-fill" />}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Intro = () => (
  <section className="section intro">
    <div className="container-x intro__grid">
      <Reveal className="intro__media">
        <img
          src={aboutHome}
          alt="Naphthenic base oil storage and handling"
          loading="lazy"
        />
        <div className="intro__badge">
          <span>{stats[0].value}</span>
          Years in the industry
        </div>
      </Reveal>

      <Reveal className="intro__copy" delay={120}>
        <p className="eyebrow">About Manant Elechem</p>
        <h2 className="h2">Naphthenic base oil storage, built around the product.</h2>

        <div className="intro__blocks">
          <div>
            <span className="intro__num">01</span>
            <h3 className="h3">What we do</h3>
            <p className="body-copy">
              At Manant Elechem Corporation, we specialize in Naphthenic Base
              Oil storage solutions tailored to meet the diverse needs of our
              clients. Our cutting-edge facilities are designed to accommodate
              a wide range of Naphthenic Base Oils.
            </p>
          </div>
          <div>
            <span className="intro__num">02</span>
            <h3 className="h3">How we work</h3>
            <p className="body-copy">
              Our facilities are equipped with the latest safety features, and
              we prioritize compliance with industry regulations.
            </p>
          </div>
        </div>

        <ButtonLink to="/about">Learn more about us</ButtonLink>
      </Reveal>
    </div>
  </section>
);

const Filmstrip = () => {
  const trackRef = useRef(null);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <div className="filmstrip">
      <div className="container-x filmstrip__head">
        <p className="filmstrip__label">Products &amp; handling</p>
        <div className="filmstrip__nav">
          <button type="button" aria-label="Previous photo" onClick={() => scrollByPage(-1)}>
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next photo" onClick={() => scrollByPage(1)}>
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="filmstrip__track" ref={trackRef} tabIndex={0}>
        {homeFilmstrip.map((src, i) => (
          <figure key={src} className="filmstrip__item">
            <img src={src} alt={`Product view ${i + 1}`} loading="lazy" />
            <figcaption>0{i + 1}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

const WhyUs = () => (
  <section className="section bg-paper why">
    <div className="container-x">
      <Reveal className="why__head">
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2 className="h2">The right partner for a critical decision.</h2>
        </div>
        <p className="lead">
          At Manant Elechem, we understand that selecting the right partner for
          your base oil storage, distribution, and manufacturing needs is a
          critical decision. Here are some compelling reasons why we stand out:
        </p>
      </Reveal>

      <ol className="why__list">
        <Reveal as="li" delay={0}>
          <span className="why__no">01</span>
          <h3 className="h3">Expertise and Experience</h3>
          <p className="body-copy">
            With years of industry experience, our team brings unparalleled
            expertise to every project. Our in-depth knowledge of base oil
            handling and processing ensures that your needs are met with
            precision and professionalism.
          </p>
        </Reveal>
        <Reveal as="li" delay={120}>
          <span className="why__no">02</span>
          <h3 className="h3">Comprehensive Solutions</h3>
          <p className="body-copy">
            We offer an all-in-one solution for base oil storage, distribution,
            and small-scale manufacturing. This integrated approach streamlines
            your operations and saves you time and resources.
          </p>
        </Reveal>
      </ol>
    </div>

    <Filmstrip />
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <img className="testimonials__bg" src={testimonialBg} alt="" aria-hidden="true" />

    <div className="container-x testimonials__head">
      <Reveal>
        <p className="eyebrow eyebrow--light">Testimonials</p>
        <h2 className="h2 testimonials__title">What clients say</h2>
      </Reveal>
    </div>

    <div className="marquee" aria-label="Companies that trust Manant Elechem">
      <div className="marquee__track">
        <ul className="marquee__set">
          {testimonials.map((t) => (
            <li key={t.company}>{t.company}</li>
          ))}
        </ul>
        <ul className="marquee__set" aria-hidden="true">
          {testimonials.map((t) => (
            <li key={`${t.company}-dup`}>{t.company}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="container-x">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{ prevEl: ".t-prev", nextEl: ".t-next" }}
        pagination={{ el: ".t-pagination", type: "fraction" }}
        className="t-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.company}>
            <figure className="quote">
              <blockquote>“{t.review}”</blockquote>
              <figcaption>
                <img src={testimonialAvatarImage} alt="" />
                <span>
                  <strong>{t.company}</strong>
                  <small>Client testimonial</small>
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="t-controls">
        <button type="button" className="t-prev" aria-label="Previous testimonial">
          <FiArrowLeft aria-hidden="true" />
        </button>
        <div className="t-pagination" />
        <button type="button" className="t-next" aria-label="Next testimonial">
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);

const Sourcing = () => (
  <section className="sourcing">
    <img className="sourcing__bg" src={homeBanner} alt="" aria-hidden="true" />
    <div className="container-x sourcing__inner">
      <Reveal>
        <p className="eyebrow sourcing__eyebrow">Can't find it?</p>
        <h2 className="display sourcing__title">We'll source it.</h2>
        <p className="lead lead--light sourcing__lead">
          Having trouble sourcing a hard-to-find base oil or looking to sell
          excess product? Manant Elechem team is your answer. Our team will
          work on your behalf by sourcing products from our global base oil
          network.
        </p>
        <ButtonLink to="/contact" variant="light">
          Contact us
        </ButtonLink>
      </Reveal>
    </div>
  </section>
);

const Home = () => {
  usePageTitle("Home");
  return (
    <>
      <Hero />
      <Intro />
      <StatsBand />
      <WhyUs />
      <Testimonials />
      <Sourcing />
    </>
  );
};

export default Home;
