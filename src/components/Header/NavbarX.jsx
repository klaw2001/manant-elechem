import React, { useEffect, useState } from "react";
import logo from "../../images/newlog2.png";
import { Container, Offcanvas } from "react-bootstrap";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavbarX() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuItemClick = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <Container>
      <Navbar
        expand="lg"
        className={`w-100 z-3 ${
          isScrolled ? "position-fixed bg-light top-0 start-0 " : ""
        }`}
      >
        <Container>
          <div className="main-navbar d-flex justify-content-between w-100 align-items-center">
            <Navbar.Brand href="#home">
              <img src={logo} alt="" className="" width={200} />
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} />
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive="lg"
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="">
                <Nav className="m-auto nav-items text-dark d-lg-flex align-items-lg-center">
                  <NavLink
                    to="/"
                    className="page-active text-decoration-none nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="text-decoration-none text-dark nav-link"
                    onClick={handleMenuItemClick}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="text-decoration-none text-dark nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    className="text-decoration-none text-dark nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="text-decoration-none text-dark nav-link"
                    onClick={handleMenuItemClick}
                  >
                    Contact
                  </NavLink>
                  <div className="ms-lg-5">
                    <Link to="/contact">
                      <button
                        className="global-button-one"
                        onClick={handleMenuItemClick}
                      >
                        GET QUOTE
                      </button>
                    </Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarX;
