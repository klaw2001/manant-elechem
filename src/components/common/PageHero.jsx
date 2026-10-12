import React from "react";

// Shared hero for inner pages. Pass `image` for a photographic band, otherwise it is typographic.
const PageHero = ({ eyebrow, title, image, children }) => (
  <section
    className={`page-hero ${image ? "page-hero--image" : ""}`}
    style={image ? { "--hero-img": `url(${image})` } : undefined}
  >
    <div className="page-hero__rules" aria-hidden="true" />
    <div className="container-x page-hero__inner">
      <p className="eyebrow eyebrow--light">{eyebrow}</p>
      <h1 className="display page-hero__title">{title}</h1>
      {children && <p className="lead lead--light page-hero__lead">{children}</p>}
    </div>
  </section>
);

export default PageHero;
