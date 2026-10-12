import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMail, FiMapPin, FiMenu, FiPhone, FiX } from "react-icons/fi";
import logo from "../../images/newlog2.png";
import { company } from "../../data/site";
import ButtonLink from "../common/ButtonLink";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="topbar">
        <div className="container-x topbar__inner">
          <div className="topbar__contact">
            <a href={`mailto:${company.email}`}>
              <FiMail aria-hidden="true" />
              {company.email}
            </a>
            <a href={company.mobile.href}>
              <FiPhone aria-hidden="true" />
              {company.mobile.label}
            </a>
          </div>
          <p className="topbar__place">
            <FiMapPin aria-hidden="true" />
            Vadodara, Gujarat, India
          </p>
        </div>
      </div>

      <nav className="navrow" aria-label="Primary">
        <div className="container-x navrow__inner">
          <Link to="/" className="brand" aria-label={`${company.name} — home`}>
            <img src={logo} alt="" width="168" />
          </Link>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navrow__actions">
            <ButtonLink to="/contact" className="btn--sm" icon={false}>
              Get a quote
            </ButtonLink>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-nav" className="mobile-panel">
        <ul>
          {links.map((l, i) => (
            <li key={l.to} style={{ "--i": i }}>
              <NavLink to={l.to} end={l.to === "/"}>
                <span className="mobile-panel__no">0{i + 1}</span>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-panel__foot">
          <a href={company.mobile.href}>{company.mobile.label}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
