import React, { useEffect } from "react";
import $ from "jquery";
import { Container } from "react-bootstrap";
import './counter.css'
const Counter = () => {
  useEffect(() => {
    // Function to check if an element is visible and animate it
    function inVisible(element) {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var elementTop = element.offset().top;
      var elementBottom = elementTop + element.height();

      if (elementBottom <= windowBottom && elementTop >= windowTop) {
        animate(element);
      }
    }

    // Function to animate the element
    function animate(element) {
      if (!element.hasClass("ms-animated")) {
        var maxval = element.data("max");
        var html = element.html();
        element.addClass("ms-animated");
        $({ countNum: element.html() }).animate(
          {
            countNum: maxval,
          },
          {
            duration: 5000,
            easing: "linear",
            step: function () {
              element.html(Math.floor(this.countNum) + html);
            },
            complete: function () {
              element.html(this.countNum + html);
            },
          }
        );
      }
    }

    // Add a scroll event listener
    $(window).scroll(function () {
      $("h2[data-max]").each(function () {
        inVisible($(this));
      });
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      $(window).off("scroll");
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      <div className="py-5">
        <Container>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 counter-row">
          <div class="col bg-white rounded p-3 counter-col">
            <i class="fa fa-user"></i>
            <h2 data-max="50">+ <br /></h2>
            <h4>Happy Clients</h4>
          </div>
          <div class="col bg-white rounded p-3 counter-col">
            <i class="fa fa-code"></i>
            <h2 data-max="25000">+ <br /></h2>
            <h4>Products Per Month</h4>
          </div>
          <div class="col bg-white rounded p-3 counter-col">
            <i class="fa fa-lock"></i>
            <h2 data-max="10">+ <br /></h2>
            <h4>Active Projects</h4>
          </div>
          <div class="col bg-white rounded p-3 counter-col">
            <i class="fa fa-briefcase"></i>
            <h2 data-max="30" id="test">
              + <br />
            </h2>
            <h4>Completed Projects</h4>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Counter;
