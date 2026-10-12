import React, { useEffect, useCallback, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { galleryImages } from "../data/gallery";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import "./Gallery.css";

const Lightbox = ({ index, onClose, onStep }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Facility photo viewer" onClick={onClose}>
      <button type="button" className="lightbox__close" aria-label="Close" onClick={onClose}>
        <FiX aria-hidden="true" />
      </button>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
      >
        <FiChevronLeft aria-hidden="true" />
      </button>
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={galleryImages[index]} alt={`Facility view ${index + 1}`} />
        <figcaption className="tabular">
          {String(index + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </div>
  );
};

const Gallery = () => {
  usePageTitle("Gallery");
  const [active, setActive] = useState(null);

  const step = useCallback(
    (dir) =>
      setActive((i) => (i === null ? null : (i + dir + galleryImages.length) % galleryImages.length)),
    []
  );
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Our facility in pictures.">
        A closer look at the storage, handling and day-to-day work behind every
        delivery. Select a photo to view it full size.
      </PageHero>

      <section className="section gallery">
        <div className="container-x">
          <div className="masonry">
            {galleryImages.map((src, i) => (
              <Reveal key={src} className="masonry__item" delay={(i % 3) * 80}>
                <button
                  type="button"
                  className="masonry__button"
                  onClick={() => setActive(i)}
                  aria-label={`Open photo ${i + 1}`}
                >
                  <img src={src} alt={`Facility view ${i + 1}`} loading="lazy" />
                  <span className="masonry__index tabular">{String(i + 1).padStart(2, "0")}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active !== null && <Lightbox index={active} onClose={close} onStep={step} />}
    </>
  );
};

export default Gallery;
