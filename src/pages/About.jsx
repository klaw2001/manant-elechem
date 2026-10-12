import React from "react";
import aboutHero from "../images/about-hero.jpg";
import aboutChoose from "../images/about-choose.jpg";
import proposedPlant from "../images/Picture1.png";
import { aboutPillars } from "../data/site";
import ButtonLink from "../components/common/ButtonLink";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import StatsBand from "../components/common/StatsBand";
import usePageTitle from "../hooks/usePageTitle";
import "./About.css";

const About = () => {
  usePageTitle("About");

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Thirty-five years in base oil."
        image={aboutHero}
      >
        Sourcing expertise for naphthenic &amp; paraffinic base oils, ink oil,
        paraffin wax and specialty oils from the USA.
      </PageHero>

      <section className="section about-company">
        <div className="container-x about-company__grid">
          <Reveal>
            <p className="eyebrow">About our company</p>
            <h2 className="h2">A young organization with a long-standing focus.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              This ambitious young organization, born 35 years ago, has the
              sourcing expertise for Naphthenic &amp; Paraffinic Base Oils, Ink
              Oil, Paraffin Wax, Micro Crystalline Wax, Polyethylene Waxes and
              other Specialty Oils from USA.
            </p>
            <div className="about-company__sign">
              <p>
                The team is headed by <strong>Mr. Digant D. Mistry</strong>, a
                Chemical Engineer.
              </p>
              <p>We have qualified support staff.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pillars">
        <div className="container-x">
          {aboutPillars.map((p, i) => (
            <article key={p.no} className={`pillar ${i % 2 ? "pillar--flip" : ""}`}>
              <Reveal className="pillar__media">
                <img src={p.image} alt="" loading="lazy" />
              </Reveal>
              <Reveal className="pillar__copy" delay={120}>
                <span className="pillar__no">{p.no}</span>
                <h2 className="h2">{p.title}</h2>
                <p className="body-copy">{p.body}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-navy plant">
        <div className="container-x plant__grid">
          <Reveal className="plant__copy">
            <p className="eyebrow eyebrow--light">Expansion</p>
            <h2 className="h2">Proposed storage, blending and packing plant.</h2>
            <p className="body-copy body-copy--light">
              Planned for village Sampla, Vadodara, this proposed facility is
              designed to extend our storage and distribution capacity.
            </p>
            <ButtonLink to="/services" variant="light">
              View our services
            </ButtonLink>
          </Reveal>
          <Reveal className="plant__media" delay={120}>
            <img
              src={proposedPlant}
              alt="Rendering of the proposed storage, blending and packing plant at village Sampla, Vadodara"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section about-years">
        <div className="container-x about-years__grid">
          <Reveal className="about-years__media">
            <img src={aboutChoose} alt="" loading="lazy" />
          </Reveal>
          <Reveal className="about-years__copy" delay={120}>
            <p className="eyebrow">Experience</p>
            <h2 className="h2">Our company has 35 years of experience in the industry.</h2>
            <p className="lead">
              We have a long and proud history giving emphasis to environment,
              social and economic outcomes to deliver places that respond.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsBand />
    </>
  );
};

export default About;
