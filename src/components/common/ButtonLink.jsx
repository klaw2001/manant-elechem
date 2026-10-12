import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ButtonLink = ({ to, variant = "primary", className = "", icon = true, children }) => (
  <Link to={to} className={`btn btn--${variant} ${className}`}>
    <span>{children}</span>
    {icon && <FiArrowRight aria-hidden="true" />}
  </Link>
);

export default ButtonLink;
