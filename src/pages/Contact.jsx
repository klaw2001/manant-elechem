import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { company } from "../data/site";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import "./Contact.css";

const Contact = () => {
  usePageTitle("Contact");

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk base oil.">
        Feel free to contact us if you need any assistance, any help or another
        question.
      </PageHero>

      <section className="section contact">
        <div className="container-x contact__grid">
          <Reveal className="contact__info">
            <ul className="contact__list">
              <li>
                <FiMapPin aria-hidden="true" />
                <div>
                  <h2 className="contact__label">Office</h2>
                  <address>
                    {company.address.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </address>
                </div>
              </li>
              <li>
                <FiPhone aria-hidden="true" />
                <div>
                  <h2 className="contact__label">Phone</h2>
                  <p>
                    <a href={company.mobile.href}>{company.mobile.label}</a>
                  </p>
                  <p>
                    {company.landlines.map((l, i) => (
                      <span key={l.label}>
                        {i > 0 && <span className="contact__sep"> · </span>}
                        <a href={l.href}>{l.label}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <div>
                  <h2 className="contact__label">Email</h2>
                  <p>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact__map">
              <iframe
                src={company.mapEmbed}
                title="Map showing the Manant Elechem office in Vadodara"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form action={company.formEndpoint} method="POST" className="quote-form">
              <p className="quote-form__intro">
                Tell us what you need and we'll get back to you.
              </p>

              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <button type="submit" className="btn btn--ink quote-form__submit">
                <span>Send message</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
