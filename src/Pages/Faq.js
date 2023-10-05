import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // Import GSAP library
import flower from "../assets/images/flower.png";
import bannersmoke from "../assets/video/bannersmoke.mp4";
import bannerpro from "../assets/images/bannerpro.png";

import Header from "../Components/Header/Header";
import Warning from "../Components/Warning";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../Components/Banner";
import buyleftspan from "../assets/images/buyleftspan.png";
import buyrightspan from "../assets/images/buyrightspan.png";
import Partner from "../Components/Partner";
import headerlogo from "../assets/images/headerlogo.png";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import mission from "../assets/images/mission.png";
import seccoverline from "../assets/images/cover2.png";
import arrowul from "../assets/images/arrowul.png";

function FAQ() {
  return (
    <div className="font-bebas">
      <Warning />

      <Header />
      <div className="bef-aft">
        <section className="policiessection">
          <span className="buyleftspan">
            {" "}
            <img src={buyleftspan} />
          </span>
          <span className="buyrightspan">
            {" "}
            <img src={buyrightspan} />
          </span>
          <div className="container-1640 pt-3">
            <div className="refundcontent border-top">
              <div className="imgrefund">
                {" "}
                <img src={headerlogo} />
              </div>
              <h1 class="carttitle">FAQ</h1>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} /> Why do I need to create an account?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                Due to legislation, we are unable to offer guest checkout for
                orders which include tobacco.{" "}
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} />
                What happens if I miss my delivery?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                Your order will be returned to our nearest store, a customer
                service team member will contact you to arrange an alternative
                delivery option.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} />
                Same Day Delivery doesn’t appear as delivery option for me?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                Unfortunately, some areas within metropolitan regions may still
                fall outside of our current delivery coverage. We will be
                consistently adding new delivery areas throughout the year.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} />I placed an order, but my details are
                incorrect?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                If you notice an error with your delivery address, please
                contact our customer service team and we will update your
                details.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} />I haven’t received my order confirmation?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                If you haven’t received an order confirmation email within 30
                minutes of placing your order please contact our customer
                service team.
              </p>

              <p className="paratitle bold" style={{ marginBottom: "0px" }}>
                <img src={arrowul} />
                When will my order be dispatched?
              </p>
              <p className="paratitle" style={{ marginBottom: "50px" }}>
                All orders placed before 1pm will be dispatched by 2pm that same
                day. Orders placed after 1pm will be dispatched by 2pm the next
                day.
              </p>
            </div>
          </div>
        </section>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default FAQ;
