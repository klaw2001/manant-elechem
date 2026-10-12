import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { company, productRange } from "../../data/site";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container-x">
      <div className="site-footer__top">
        <div className="site-footer__news">
          <p className="eyebrow eyebrow--light">Newsletter</p>
          <h2 className="site-footer__title">Stay close to the market.</h2>
          <form
            className="newsletter"
            action={company.formEndpoint}
            method="POST"
          >
            <input type="hidden" name="_subject" value="Newsletter subscription" />
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <FiArrowRight aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="site-footer__cols">
          <div>
            <h4>Products</h4>
            <ul>
              {productRange.map((p) => (
                <li key={p}>
                  <Link to="/services">{p}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Our office</h4>
            <address>
              {company.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <ul className="site-footer__phones">
              <li>
                <a href={company.mobile.href}>{company.mobile.label}</a>
              </li>
              {company.landlines.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          Copyright © 2019{" "}
          <Link to="/">Manant Elechem Corporation</Link>
        </p>
        <p>
          Designed by{" "}
          <a href={company.designer.url} target="_blank" rel="noreferrer">
            {company.designer.name}
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
