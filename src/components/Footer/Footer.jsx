import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_footer">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/services">Napthenic Oils</Link>
                </li>
                <li>
                  <Link to="/services">Petrolatum</Link>
                </li>
                <li>
                  <Link to="/services">Ink Oils & Solvents </Link>
                </li>
                <li>
                  <Link to="/services">Micro Waxes</Link>
                </li>
                <li>
                  <Link to="/services">Polyethylene (PE) Waxes</Link>
                </li>
                <li>
                  <Link to="/services">Paraffin Waxes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Service</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery </Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms And Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Our Address</h4>
              <p className="mt-3">
                204 Peridot, 24 Urmi Society, Near Urmi Char Rasta, Akota,
                Vadodara-390 015 Phone:{" "}
                <a href="tel:+91-265-2960754" className="text-decoration-none text-white">+91-265-2960754 </a> 
                 Tel/Fax: <a href="tel:+91-265-2960825" className="text-decoration-none text-white">+91-265-2960825</a>
              </p>
            </div>
            <div class="social_profile">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <p class="copyright">
              Copyright © 2019{" "}
              <Link to="/" className="text-decoration-underline text-light">
                Manant Elechem Corporation
              </Link>
              .
            </p>
          </div>
          <div class="col-md-6 col-12">
            <p class="copyright">
              Designed By{" "}
              <a
                href="https://hrishikeshnetke.in"
                className="text-decoration-underline text-light"
              >
                Hrishikesh Netke
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
