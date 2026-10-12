import React from "react";
import bannerImg from "../images/banner.png";
import { productRange, serviceLines, storage } from "../data/site";
import ButtonLink from "../components/common/ButtonLink";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import "./Services.css";

const Tank = ({ label, kl, status, proposed = false }) => (
  <div className={`tank ${proposed ? "tank--proposed" : ""}`}>
    <div className="tank__well">
      <div className="tank__shell" style={{ "--fill": (kl / 80) * 100 }} />
    </div>
    <p className="tank__kl tabular">
      {kl}
      <small> KL</small>
    </p>
    <p className="tank__name">{label}</p>
    <p className="tank__status">{status}</p>
  </div>
);

const Services = () => {
  usePageTitle("Services");

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Storage, distribution & small-scale manufacturing."
        image={bannerImg}
      >
        Three ways we work with base oil, backed by our own storage facilities
        and equipment.
      </PageHero>

      <section className="section range">
        <div className="container-x">
          <Reveal className="range__head">
            <p className="eyebrow">Product range</p>
            <h2 className="h2">What we handle</h2>
          </Reveal>
          <ol className="range__list">
            {productRange.map((p, i) => (
              <Reveal as="li" key={p} delay={(i % 3) * 90}>
                <span className="range__no">0{i + 1}</span>
                <span className="range__name">{p}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {serviceLines.map((s, i) => (
        <section
          key={s.title}
          id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={`section line ${i % 2 ? "line--flip" : ""}`}
        >
          <div className="container-x line__grid">
            <Reveal className="line__media">
              <img className="line__primary" src={s.primary} alt={s.title} loading="lazy" />
              <img className="line__secondary" src={s.secondary} alt="" loading="lazy" />
            </Reveal>
            <Reveal className="line__copy" delay={120}>
              <span className="line__no">0{i + 1}</span>
              <h2 className="h2">{s.title}</h2>
              <p className="body-copy">{s.body}</p>
              <ButtonLink to="/contact" variant="ink">
                Get a quote
              </ButtonLink>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section bg-paper storage">
        <div className="container-x">
          <Reveal className="storage__head">
            <p className="eyebrow">Storage &amp; equipment</p>
            <h2 className="h2">Tank capacity, drawn to scale.</h2>
            <p className="lead">
              Heights are proportional to kilolitre capacity. Dashed outlines
              show proposed tanks.
            </p>
          </Reveal>

          <Reveal className="tanks" delay={120} aria-label="Storage tank capacities">
            <div className="tanks__group">
              {storage.tanks.map((t) => (
                <Tank key={t.label} {...t} />
              ))}
            </div>
            <div className="tanks__group tanks__group--proposed">
              <span className="tanks__caption">Proposed</span>
              {storage.proposedTanks.map((t) => (
                <Tank key={t.label} {...t} proposed />
              ))}
            </div>
          </Reveal>

          <div className="storage__facts">
            <Reveal className="fact fact--big">
              <p className="fact__value tabular">
                {storage.warehouse.value}
                <small> {storage.warehouse.unit}</small>
              </p>
              <p className="fact__label">{storage.warehouse.label}</p>
            </Reveal>
            <Reveal as="ul" className="fact fact--list" delay={120}>
              {storage.weighing.map((w) => (
                <li key={w.label}>
                  <span>{w.label}</span>
                  <em className={w.status === "Ordered" ? "is-ordered" : ""}>{w.status}</em>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-x cta-band__inner">
          <h2 className="h2">Need a specific grade or volume?</h2>
          <ButtonLink to="/contact" variant="light">
            Talk to our team
          </ButtonLink>
        </div>
      </section>
    </>
  );
};

export default Services;
