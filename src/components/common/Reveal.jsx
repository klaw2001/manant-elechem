import React from "react";
import useInView from "../../hooks/useInView";

// Fades and lifts its children into place once they scroll into view.
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
