import React from "react";
import { stats } from "../../data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const StatsBand = () => (
  <section className="stats-band" aria-label="Company figures">
    <div className="container-x">
      <ul className="stats-band__grid">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 90} className="stat">
            <p className="stat__num">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="stat__label">{s.label}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default StatsBand;
